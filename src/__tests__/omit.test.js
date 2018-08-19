import { omit } from '../omit';

test('return object without keys', () => {
  const base = {
    a: 1,
    b: 'b',
    c: true,
  };

  expect(
    omit(['deleteMe', 'andMe'], {
      ...base,
      deleteMe: 'plz',
      andMe: 'gogo',
    }),
  ).toEqual(base);
});
