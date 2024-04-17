#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(
  chalk.greenBright.bold.bgWhiteBright(
    "\t\t\t\t\t\t Currency Converter"
  )
);
console.log(chalk.blueBright("\nDeveloped By:"));
console.log(chalk.redBright.underline("\tAnees Hanif"));
console.log("\n");
const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.magentaBright.bold.italic(
      "Enter your sentence to count the word:"
    ),
  },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(
  chalk.yellowBright.italic.bold`Your sentence word is ${words.length}`
);