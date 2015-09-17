'use strict';

describe('<ll-page-header> - Required Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  it('should take a pageTitle', function() {
    expect(element.pageTitle).to.be.eql('Review Booking Details');
  });

  it('should take a subPageTitle', function() {
    expect(element.subPageTitle).to.be.eql('Select a cancelled booking to review');
  });

  it('should take a prevTitle', function() {
    expect(element.prevTitle).to.be.eql('Cancelled Bookings');
  });

  it('should take a pageDetail', function() {
    expect(element.pageDetail).to.be.eql('Booking information for: Bob Saget');
  });

});