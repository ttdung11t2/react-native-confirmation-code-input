import { concatStyles } from '../styles';

test('should skip all falsy arguments', () => {
  expect(concatStyles(null, 0, undefined, false, [null], [])).toEqual(null);
  expect(concatStyles([])).toEqual(null);
});

test('should return styles', () => {
  const [s1, s2, s3] = [{ color: 'gold' }, { color: 'red' }, { color: 'blue' }];
  const isSelected = false;

  expect(concatStyles(s1, [isSelected && s2, s3])).toEqual([s1, s3]);
  expect(concatStyles(s1, [null, s2])).toEqual([s1, s2]);
  expect(concatStyles([s1, null])).toEqual(s1);
});
