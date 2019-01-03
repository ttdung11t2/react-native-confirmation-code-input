// @flow

export const concatStyles = (...styles: any): Array<Object> | Object | null => {
  let tmp = [];

  for (const style of styles) {
    if (style) {
      if (Array.isArray(style)) {
        const flattenStyles = concatStyles(...style);

        if (flattenStyles) {
          tmp = tmp.concat(flattenStyles);
        }
      } else {
        tmp = tmp.concat(style);
      }
    }
  }

  if (tmp.length === 0) {
    return null;
  }

  if (tmp.length === 1) {
    return tmp[0];
  }

  return tmp;
};
