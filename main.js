import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1122;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
console.log(pinAnswer.q1);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balances"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "inter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is" + myBalance);
    }
    else if (operationAns.operation === "check balance")
        console.log("your balance is:" + myBalance);
}
else {
    console.log("incorrect pin number");
}
