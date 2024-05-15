import { LCMS } from '../src/js/lcms.js';

describe('LCMS', () => {
  let lcms2;
  let lcms5;

  beforeEach(() => {
    lcms2 = new LCMS('LCMS 2');
    lcms5 = new LCMS('LCMS 5');
  });

  test('should correctly create a LCMS 2 object', () => {
    expect(lcms2.instrument).toEqual('LCMS 2');
  });
  test('should correctly create a LCMS 2 object', () => {
    expect(lcms5.instrument).toEqual('LCMS 5');
  });
});




