export function remove<T>(item: T, array: T[]) {
  const index = array.indexOf(item);
  array.splice(index, 1);
}
