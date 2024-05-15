import { LCMS } from '../src/js/lcms.js';

describe('LCMS', () => {
  let lcms;
  let lcms2;

  beforeEach(() => {
    lcms2 = 'LCMS 2';
    lcms = new LCMS(lcms2);
  });

  test('should correctly create a LCMS object', () => {
    expect(lcms.lcms2).toEqual(lcms2);
  });
});



