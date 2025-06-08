function calculateBodaFare(distanceInKm) {
  const baseFare = 50;       // KES
  const chargePerKm = 15;    // KES per km

  // Validate the input
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    document.getElementById("output").textContent = "Tafadhali ingiza kilomita halali zaidi ya 0.";
    return;
  }

  const tripFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + tripFare;

  // Prepare the fare breakdown
  const output = `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${tripFare}
Total: KES ${totalFare}

Panda Pikipiki!`;

  // Display the output
  document.getElementById("output").textContent = output;
}

function promptBodaFare() {
  const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  const distance = Number(input);
  calculateBodaFare(distance);
}
