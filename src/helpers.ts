function formatItems(items: string[]): { key: string; content: string }[] {
  return items.map((content, index) => ({ key: `item-${index}`, content }));
}

export { formatItems };
