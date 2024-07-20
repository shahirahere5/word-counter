#! /usr/bin/env node

import inquirer from "inquirer"

const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    },
])

// const words = answers.sentence.trim().split(" ")
const words = answers.sentence.trim()

// const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

console.log(words);

console.log(`your sentence word count is ${words.length}`);

