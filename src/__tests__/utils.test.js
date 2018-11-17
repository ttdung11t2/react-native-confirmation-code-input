import { getClassStyle, getInputSpaceStyle } from '../utils';

describe('getInputSpaceStyle', () => {
  test('must return default style', () => {
    expect(getInputSpaceStyle()).toEqual({
      marginRight: 0,
      marginLeft: 0,
    });
  });

  test('must return style for right variant', () => {
    const space = 10;

    expect(getInputSpaceStyle(space, 'right')).toEqual({
      marginLeft: space,
    });
  });

  test('must return style for left variant', () => {
    const space = 10;

    expect(getInputSpaceStyle(space, 'left')).toEqual({
      marginRight: space,
    });
  });

  test('must return style for center variant', () => {
    const space = 10;

    expect(getInputSpaceStyle(space, 'center')).toEqual({
      marginRight: space / 2,
      marginLeft: space / 2,
    });
  });
});

describe('getClassStyle', () => {
  test('must return null when type not supported', () => {
    expect(getClassStyle('not-supported-variant', false, {})).toBeNull();
  });

  test('must return style for clear type', () => {
    const activeColor = 'red';

    expect(getClassStyle('clear', true, { activeColor })).toEqual({
      borderWidth: 0,
      color: activeColor,
    });
  });

  test('must return style for border-box type', () => {
    const activeColor = 'gold';
    const cellBorderWidth = 2;

    expect(
      getClassStyle('border-box', true, { activeColor, cellBorderWidth }),
    ).toEqual({
      borderColor: activeColor,
      borderWidth: cellBorderWidth,
      color: activeColor,
    });
  });

  test('must return style for border-circle type', () => {
    const inactiveColor = 'gold';
    const cellBorderWidth = 2;

    expect(
      getClassStyle('border-circle', false, { inactiveColor, cellBorderWidth }),
    ).toEqual({
      borderColor: inactiveColor,
      borderWidth: cellBorderWidth,
      borderRadius: 50,
    });
  });

  test('must return style for border-b type', () => {
    const inactiveColor = 'gold';
    const cellBorderWidth = 2;

    expect(
      getClassStyle('border-b', false, { inactiveColor, cellBorderWidth }),
    ).toEqual({
      borderColor: inactiveColor,
      borderBottomWidth: cellBorderWidth,
    });
  });

  test('must return style for border-b-t type', () => {
    const inactiveColor = 'blue';
    const cellBorderWidth = 2;
    const activeColor = 'white';

    expect(
      getClassStyle('border-b-t', false, {
        activeColor,
        inactiveColor,
        cellBorderWidth,
      }),
    ).toEqual({
      color: activeColor,
      borderColor: inactiveColor,
      borderBottomWidth: cellBorderWidth,
      borderTopWidth: cellBorderWidth,
    });
  });

  test('must return style for border-l-r type', () => {
    const inactiveColor = 'blue';
    const cellBorderWidth = 2;
    const activeColor = 'white';

    expect(
      getClassStyle('border-l-r', false, {
        activeColor,
        inactiveColor,
        cellBorderWidth,
      }),
    ).toEqual({
      color: activeColor,
      borderColor: inactiveColor,
      borderLeftWidth: cellBorderWidth,
      borderRightWidth: cellBorderWidth,
    });
  });
});
