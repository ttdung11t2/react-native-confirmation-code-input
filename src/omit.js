// @flow

export const omit = (arr: Array<string>, obj: Object): Object =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => {
      acc[key] = obj[key];

      return acc;
    }, {});
