const Utils = require('./utils');

const sendPaymentRequestToApi = (amount, shipping) => {
  const totalCost = Utils.calculateNumber('SUM', amount, shipping);

  console.log(`The total is: ${totalCost}`);
};
module.exports = sendPaymentRequestToApi;
