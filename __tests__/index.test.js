import LCMS from '../src/js/index.js';

describe('LCMS', () => {
  let lcms;

  beforeEach(() => {
    lcms = new LCMS(lcms2);
  });

  test('should correctly create a LCMS object', () => {
    expect(lcms.lcms2).toEqual(lcms2);
  });
});
