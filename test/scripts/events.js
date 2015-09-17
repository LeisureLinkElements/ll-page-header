'use strict';

describe('events', function() {

  var element;
  var spy;
  beforeEach(function() {
    element = fixture('fixture');
    spy = sinon.spy(element, 'goBack');
  });

  it('should fire an event when back is clicked', function(done) {
    addEventListener('ll-page-header-back', function() {
      expect(spy.callCount).to.be.eql(1);
      done();
    });
    element.$.back.click();
  });

});