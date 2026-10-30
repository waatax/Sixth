// Support only the authored lesson disclosure tags; do not enable arbitrary HTML.
export default function rehypeLessonDisclosures() {
  return (tree) => {
    function visit(parent) {
      if (!parent.children) return;
      const output = [];
      const stack = [output];
      for (const child of parent.children) {
        if (child.type === 'raw' && /^(?:\s|<details>|<\/details>|<summary>[^<>]*<\/summary>)+$/.test(child.value)) {
          const tokens = child.value.match(/<details>|<\/details>|<summary>[^<>]*<\/summary>/g) || [];
          for (const token of tokens) {
            if (token === '<details>') {
              const element = { type: 'element', tagName: 'details', properties: {}, children: [] };
              stack.at(-1).push(element);
              stack.push(element.children);
            } else if (token === '</details>') {
              if (stack.length > 1) stack.pop();
            } else {
              stack.at(-1).push({ type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: token.slice(9, -10) }] });
            }
          }
        } else if (child.type === 'raw' && child.value.trim() === '<!-- learning-practice-v1 -->') {
          continue;
        } else {
          visit(child);
          stack.at(-1).push(child);
        }
      }
      parent.children = output;
    }
    visit(tree);
  };
}
