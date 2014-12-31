import rename from '../';

describe('rename-keys', function(){
  it('renames keys', function(){
    var obj = { spam: 'good' };
    expect(
      rename(obj, { spam: 'ham' })
    ).toEqual({ ham: 'good' });
  });
});
