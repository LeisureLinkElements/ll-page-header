'use strict';

describe('Visibility', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  it('should SHOW the details if the property was passed in', function() {
    expect(element.$['details'].classList.contains('hidden')).to.be.eql(false);
  });

  it('should HIDE the previous page title if the prevTitle property is NOT set', function() {
    expect(element.$['prev-title'].classList.contains('hidden')).to.be.eql(true);
  });

  it('should HIDE the back arrow if the prevTitle property is NOT set', function() {
    expect(element.$['back'].classList.contains('hidden')).to.be.eql(true);
  });

  it('should HIDE the divider prevTitle property is NOT set', function() {
    expect(element.$['divider'].classList.contains('hidden')).to.be.eql(true);
  });

  it('should SHOW the divider if the prevTitle AND the pageDetail are set', function() {
    element.pageDetail = 'DETAILS!!';
    element.prevTitle = "BACK";
    expect(element.$['divider'].classList.contains('hidden')).to.be.eql(false);
  });

  it('should HIDE the details if it is changed to be falsy', function() {
    element.pageDetail = '';
    expect(element.$['details'].classList.contains('hidden')).to.be.eql(true);
  });

});