# Batch TTS for review videos. Keep this file ASCII-only (Windows PowerShell 5.1 reads scripts as ANSI).
# Input: UTF-8 JSON array [{ "out": "C:\\...\\x.wav", "lang": "zh"|"en", "text": "..." }]
# zh -> Windows OneCore voice (Yating by default), en -> SAPI Microsoft Zira Desktop. Output: 16 kHz mono PCM WAV.
param(
  [Parameter(Mandatory = $true)][string]$Jobs,
  [string]$ZhVoice = 'Yating',
  [double]$ZhRate = 1.08,
  [int]$EnRate = -1
)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
Add-Type -AssemblyName System.Speech
$null = [Windows.Media.SpeechSynthesis.SpeechSynthesizer, Windows.Media.SpeechSynthesis, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.DataReader, Windows.Storage.Streams, ContentType = WindowsRuntime]
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
function Wait-Op($op, [Type]$t) { $task = $asTask.MakeGenericMethod($t).Invoke($null, @($op)); $task.Wait() | Out-Null; $task.Result }

$zh = New-Object Windows.Media.SpeechSynthesis.SpeechSynthesizer
$zh.Voice = [Windows.Media.SpeechSynthesis.SpeechSynthesizer]::AllVoices | Where-Object { $_.DisplayName -like "*$ZhVoice*" } | Select-Object -First 1
$zh.Options.SpeakingRate = $ZhRate
try { $zh.Options.AppendedSilence = [Windows.Media.SpeechSynthesis.SpeechAppendedSilence]::Min } catch {}

$en = New-Object System.Speech.Synthesis.SpeechSynthesizer
try { $en.SelectVoice('Microsoft Zira Desktop') } catch {}
$en.Rate = $EnRate
$fmt = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(16000, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)

$list = [IO.File]::ReadAllText($Jobs, [Text.Encoding]::UTF8) | ConvertFrom-Json
$n = 0
foreach ($j in $list) {
  $n++
  if (Test-Path -LiteralPath $j.out) { continue }
  $tmp = $j.out + '.part'
  if ($j.lang -eq 'en') {
    $en.SetOutputToWaveFile($tmp, $fmt)
    $en.Speak([string]$j.text)
    $en.SetOutputToNull()
  } else {
    $stream = Wait-Op ($zh.SynthesizeTextToStreamAsync([string]$j.text)) ([Windows.Media.SpeechSynthesis.SpeechSynthesisStream])
    $reader = New-Object Windows.Storage.Streams.DataReader($stream.GetInputStreamAt(0))
    $size = [uint32]$stream.Size
    $null = Wait-Op ($reader.LoadAsync($size)) ([uint32])
    $bytes = New-Object byte[] $size
    $reader.ReadBytes($bytes)
    [IO.File]::WriteAllBytes($tmp, $bytes)
    $reader.Dispose(); $stream.Dispose()
  }
  Move-Item -LiteralPath $tmp -Destination $j.out -Force
  if ($n % 100 -eq 0) { Write-Output "tts $n / $($list.Count)" }
}
Write-Output "tts done $($list.Count)"
