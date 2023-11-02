function formatItems(items) {
  return items.map((content, index) => ({ key: `item-${index}`, content }));
}

export { formatItems };
