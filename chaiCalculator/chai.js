function calculateChaiIngredients() {
  // Prompt the user for the number of cups
  let numberOfCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  
  // Convert the input to a number
  numberOfCups = Number(numberOfCups);

  // Check if the input is a valid number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  // Define the standard recipe quantities for 1 cup
  const waterPerCup = 200; // in ml
  const milkPerCup = 50;   // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2;   // in teaspoons

  // Calculate the total ingredients needed
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Display the results using template literals with backticks
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}
