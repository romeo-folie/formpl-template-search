import {ITemplate} from "../redux/templates/template.reducer";

export const addFilter = (filter: string, filters: string[]): string[] => {
  const index = filters.indexOf(filter);
  if (index === -1) filters.push(filter);
  return filters;
};

export const removeFilter = (filter: string, filters: string[]): string[] => {
  const index = filters.indexOf(filter);
  if (index !== -1) filters.splice(index, 1);
  return filters;
};

export const sortAscending = (array: any[], field: string): ITemplate[] => {
  return array.sort((a, b) => {
    if (a[field].toUpperCase() > b[field].toUpperCase()) return 1;
    if (b[field].toUpperCase() > a[field].toUpperCase()) return -1;
    return 0;
  });
};

export const sortDescending = (array: any[], field: string): ITemplate[] => {
  return array.sort((a, b) => {
    if (a[field].toUpperCase() > b[field].toUpperCase()) return -1;
    if (b[field].toUpperCase() > a[field].toUpperCase()) return 1;
    return 0;
  });
};
