import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n\t\t===={ wellcome in MURTAZA ALI quize game }====\n"));
let Name = await inquirer.prompt([
    {
        name: "person_name",
        message: chalk.bold.italic.green("enter your name"),
        type: "input"
    },
]);
let name = await inquirer.prompt([
    {
        name: "play_num",
        message: `${Name.person_name} how many number do you want to play`,
        type: "list",
        choices: ["5", "10"]
    }
]);
if (name.play_num === "5") {
    console.log(chalk.yellow.underline("So let's begain\n"));
    let Q1 = await inquirer.prompt([
        {
            name: "q1",
            message: "what is the capital of pakistan",
            type: "list",
            choices: ["karachi", "lahor", "islamabad", "pishawer"]
        }
    ]);
    if (Q1.q1 === "islamabad") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: islamabad\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q2 = await inquirer.prompt([
        {
            name: "q2",
            message: "wcich fruit is the king of all fruit",
            type: "list",
            choices: ["Banana", "apple", "peach", "mango"]
        }
    ]);
    if (Q2.q2 === "mango") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: mango \n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q3 = await inquirer.prompt([
        {
            name: "q3",
            message: "how many days are in one week",
            type: "list",
            choices: ["6", "8", "9", "nothing_else"]
        }
    ]);
    if (Q3.q3 === "nothing_else") {
        console.log(chalk.green("correct answe\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: nothing_else \n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q4 = await inquirer.prompt([
        {
            name: "q4",
            message: "29 faberery are come after every",
            type: "list",
            choices: ["three_years", "four_years", "five_years", "two_years"]
        }
    ]);
    if (Q4.q4 === "four_years") {
        console.log(chalk.green("correct answer \n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: four_years\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q5 = await inquirer.prompt([
        {
            name: "q5",
            message: "quaid_e_azam was an ",
            type: "list",
            choices: ["honest_men", "lier_men", "cheater_men",]
        }
    ]);
    if (Q5.q5 === "honest_men") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.bold.green.italic("Thanks for ply"));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: honest_men\n`));
        console.log(chalk.bold.green.italic("Thanks for ply"));
    }
}
//for ten number
if (name.play_num === "10") {
    console.log(chalk.yellow.underline("So let's begain\n"));
    let Q1 = await inquirer.prompt([
        {
            name: "q1",
            message: "what is the capital of pakistan",
            type: "list",
            choices: ["karachi", "lahor", "islamabad", "pishawer"]
        }
    ]);
    if (Q1.q1 === "islamabad") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: islamabad\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q2 = await inquirer.prompt([
        {
            name: "q2",
            message: "wcich fruit is the king of all fruit",
            type: "list",
            choices: ["Banana", "apple", "peach", "mango"]
        }
    ]);
    if (Q2.q2 === "mango") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: mango\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q3 = await inquirer.prompt([
        {
            name: "q3",
            message: "how many days are in one week",
            type: "list",
            choices: ["6", "8", "9", "nothing_else"]
        }
    ]);
    if (Q3.q3 === "nothing_else") {
        console.log(chalk.green("correct answer\n"));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: nothing_else\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q4 = await inquirer.prompt([
        {
            name: "q4",
            message: "29 faberery are come after every",
            type: "list",
            choices: ["three_years", "fouur_years", "five_years", "two_years"]
        }
    ]);
    if (Q4.q4 === "four_years") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: four_years\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q5 = await inquirer.prompt([
        {
            name: "q5",
            message: "quaid_e_azam was an ",
            type: "list",
            choices: ["honest_men", "lier_men", "cheater_men",]
        }
    ]);
    if (Q5.q5 === "honest_men") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: honest_men\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q6 = await inquirer.prompt([
        {
            name: "q6",
            message: "pakistan has ",
            type: "list",
            choices: ["five_province", "four_province", "six_province", "nothing_else"]
        }
    ]);
    if (Q6.q6 === "four_province") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: four_province\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q7 = await inquirer.prompt([
        {
            name: "q7",
            message: "ranbow has  ",
            type: "list",
            choices: ["five_colour", "four_colour", "six_colour", "seven_colour"]
        }
    ]);
    if (Q7.q7 === "seven_colour") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: seven_colour\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q8 = await inquirer.prompt([
        {
            name: "q8",
            message: "sixty_sec combine together make ",
            type: "list",
            choices: ["one_hour", "four_minuts", "one_minuts", "nothing_else"]
        }
    ]);
    if (Q8.q8 === "one_minuts") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: one_minuts\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q9 = await inquirer.prompt([
        {
            name: "q6",
            message: "which colour have fastest speed",
            type: "list",
            choices: ["blue", "black", "red", "white"]
        }
    ]);
    if (Q9.q9 === "red") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.yellow("Next question "));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: red\n`));
        console.log(chalk.yellow("Next question "));
    }
    ;
    let Q10 = await inquirer.prompt([
        {
            name: "q10",
            message: "what is the national animel",
            type: "list",
            choices: ["loine", "markhor", "tiger", "egal"]
        }
    ]);
    if (Q10.q10 === "markhore") {
        console.log(chalk.green("correct answer\n"));
        console.log(chalk.bold.green.italic("Thanks for ply"));
    }
    else {
        console.log(chalk.red(`wrong answer correct answer was: markhor\n`));
        console.log(chalk.bold.green.italic("Thanks for ply"));
    }
}
