export const addFilter = (filter: string, filters: string[]): string[] => {
  const index = filters.indexOf(filter);
  if (index === -1) filters.push(filter);
  return filters;
};

export const removeFilter = (filter: string, filters: string[]): string[] => {
  const index = filters.indexOf(filter);
  filters.splice(index, 1);
  return filters;
};
