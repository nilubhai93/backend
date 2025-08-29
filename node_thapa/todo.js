import readline from "readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})


const todos = [];


const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: view Tasks");
    console.log("3: Exit");
    r1.question("choose an option:", handleInput);
}

const handleInput = (option) => {
    if (option === "1") {
        r1.question("Enter a task:", (task) => {
            todos.push(task);   
            console.log("Task added: ", task);
            showMenu();
        })

    } 
    

    
    else if (option === "2") {
        console.log("\n Your Todo Lists");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}: ${todo}`);
        })
        showMenu()
    }
    

    
    
    else if (option === "3") {
        console.log("Goodbye");
        rl.close();
    } 
    
    
    
    else {
        console.log("Invalid option, please try again");
        showMenu();
    }

}
showMenu();