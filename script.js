




// function calculateProfit() {
//     const investment = parseFloat(document.getElementById('investment').value);
//     const initialPrice = parseFloat(document.getElementById('initial-price').value);
//     const sellingPrice = parseFloat(document.getElementById('selling-price').value);
//     const investmentFee = parseFloat(document.getElementById('investment-fee').value);
//     const exitFee = parseFloat(document.getElementById('exit-fee').value);
  
//     const investmentAmount = investment / initialPrice;
//     const exitAmount = investmentAmount * sellingPrice;
//     const investmentFeeAmount = investment * (investmentFee / 100);
//     const exitFeeAmount = exitAmount * (exitFee / 100);
//     const totalInvestmentFee = investmentFeeAmount;
//     const totalExitFee = exitFeeAmount;
//     const profit = exitAmount - investmentAmount - totalInvestmentFee - totalExitFee;
//     const profitPercentage = (profit / investmentAmount) * 100;
  
//     document.getElementById('total-investment-fee').textContent = `$${totalInvestmentFee.toFixed(2)}`;
//     document.getElementById('total-exit-fee').textContent = `$${totalExitFee.toFixed(2)}`;
//     document.getElementById('profit').textContent = `${profitPercentage.toFixed(2)}% ($${profit.toFixed(2)})`;
//     document.getElementById('total-value').textContent = `$${exitAmount.toFixed(2)}`;
//   }
  