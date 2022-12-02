import { readFileSync } from "fs";
import { createInterface } from "readline";

const getHighestCalories = () => {
  const lines = readFileSync("input.txt", "utf8").split("\n\n");

  let highestCalories = 0;

  lines.forEach((foodItemLines) => {
    const foodItems = foodItemLines.split("\n");
    let calories = 0;

    foodItems.forEach((foodItem) => calories += parseInt(foodItem));

    if (calories > highestCalories) highestCalories = calories;
  });

  console.log(highestCalories);
};

const getThreeHighestCalories = () => {
  const lines = readFileSync("input.txt", "utf8").split("\n\n");

  const caloryArray = [];

  lines.forEach((foodItemLines) => {
    const foodItems = foodItemLines.split("\n");
    let calories = 0;

    foodItems.forEach((foodItem) => calories += parseInt(foodItem));

    caloryArray.push(calories);
  });

  caloryArray.sort((a, b) => b - a);

  console.log(caloryArray.slice(0, 3));

  console.log(caloryArray[0] + caloryArray[1] + caloryArray[2]);
};

const menu = () => {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`

1. Get highest calories

2. Get three highest calories

3. Exit

`);
  readline.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        getHighestCalories();
        break;
      case "2":
        getThreeHighestCalories();
        break;
      case "3":
        process.exit();
        break;
      default:
        console.log("Invalid choice");
        break;
    }
    readline.close();
    process.exit();
  });
};

menu();