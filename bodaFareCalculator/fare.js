const readline = require('readline');

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;       // KES
  const chargePerKm = 15;    // KES per km

  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Tafadhali ingiza kilomita halali zaidi ya 0.");
    return;
  }

  const tripFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + tripFare;

  const output = `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${tripFare}
Total: KES ${totalFare}

Panda Pikipiki!`;

  console.log(output);
}

function promptBodaFare() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (input) => {
    const distance = Number(input);
    calculateBodaFare(distance);
    rl.close();
  });
}

promptBodaFare();

