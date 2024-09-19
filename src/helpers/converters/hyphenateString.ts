export function hyphenateString(val: string) {
  return val.split(' ').join('-').toLowerCase();
}
