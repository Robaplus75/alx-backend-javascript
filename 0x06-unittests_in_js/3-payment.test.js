const { expect } = require('chai');
const Utils = require('./utils');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('useint the calculate number method  of Utils', () => {
    const broBig = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(broBig.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(broBig.calculateNumber.callCount).to.be.equal(1);

    broBig.calculateNumber.restore();
  });
});
