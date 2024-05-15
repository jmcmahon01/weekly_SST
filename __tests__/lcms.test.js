import { LCMS } from '../src/js/lcms.js';

describe('LCMS', () => {
  let lcms2;
  let lcms5;
  let lcms6;

  beforeEach(() => {
    lcms2 = new LCMS('LCMS 2');
    lcms5 = new LCMS('LCMS 5');
    lcms6 = new LCMS('LCMS 6');
  });

  test('should correctly create a LCMS 2 object', () => {
    expect(lcms2.instrument).toEqual('LCMS 2');
  });
  test('should correctly create a LCMS 2 object', () => {
    expect(lcms5.instrument).toEqual('LCMS 5');
  });
  test('should correctly create a LCMS 6 object', () => {
    expect(lcms6.instrument).toEqual('LCMS 6');
  });
});




