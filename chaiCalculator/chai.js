const readline = require('readline');

function calculateChaiIngredients() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (input) => {
    let numberOfCups = Number(input);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
      console.log("Please enter a valid number greater than 0.");
      rl.close();
      return;
    }

    const waterPerCup = 200; // ml
    const milkPerCup = 50;   // ml
    const teaLeavesPerCup = 1; // tablespoons
    const sugarPerCup = 2;   // teaspoons

    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");

    rl.close();
  });
}

calculateChaiIngredients();

