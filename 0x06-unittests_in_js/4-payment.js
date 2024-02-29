const Utils = require('./utils');

const sendpayment = (amount, shipping) => {
  const totalCost = Utils.calculateNumber('SUM', amount, shipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendpayment;
