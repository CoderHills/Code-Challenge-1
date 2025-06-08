function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; // 1.5%
  const minFee = 10;
  const maxFee = 70;

  if (isNaN(amountToSend) || amountToSend <= 0) {
    document.getElementById("output").textContent = "Tafadhali ingiza kiasi halali zaidi ya 0.";
    return;
  }

  let calculatedFee = amountToSend * percentageFee;

  // Apply min and max fee limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalDebited = amountToSend + calculatedFee;

  const output = `Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${calculatedFee}
Total amount to be debited: KES ${totalDebited}

Send Money Securely!`;

  document.getElementById("output").textContent = output;
}

function promptTransactionFee() {
  const input = prompt("Unatuma Ngapi? (KES):");
  const amount = Number(input);
  estimateTransactionFee(amount);
}
