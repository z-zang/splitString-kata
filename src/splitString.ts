export function splitString(str: string): Array<string> {
  if(str.length % 2 != 0) {
    str += '_'
  }

  const twoCharArr: Array<string> | null = str.match(/.{1,2}/g)

  if (twoCharArr === null) return [];

  return twoCharArr
}
