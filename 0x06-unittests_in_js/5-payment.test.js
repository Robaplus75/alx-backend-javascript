const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let broBig;

  afterEach(() => {
    broBig.log.resetHistory();
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(broBig.log.calledWith('The total is: 20')).to.be.true;
    expect(broBig.log.calledOnce).to.be.true;
  });

  beforeEach(() => {
    if (!broBig) {
      broBig = sinon.spy(console);
    }
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(broBig.log.calledWith('The total is: 120')).to.be.true;
    expect(broBig.log.calledOnce).to.be.true;
  });

});
