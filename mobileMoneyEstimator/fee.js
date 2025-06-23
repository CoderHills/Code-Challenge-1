const readline = require('readline');

function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; // 1.5%
  const minFee = 10;
  const maxFee = 70;

  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali ingiza kiasi halali zaidi ya 0.");
    return;
  }

  let calculatedFee = amountToSend * percentageFee;

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

  console.log(output);
}

function promptTransactionFee() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Unatuma Ngapi? (KES): ", (input) => {
    const amount = Number(input);
    estimateTransactionFee(amount);
    rl.close();
  });
}

promptTransactionFee();

