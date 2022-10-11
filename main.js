const prompt = require('prompt-sync')({sigint: true})
console.log()


console.log("Welcome to the To-Do-List Manager application!\n")

console.log("~Select an action~");
console.log("\n[1] Create a to-do item")
console.log("[2] Complete a to-do item")
console.log("[3] Exit To-Do-List Application")

let option = Number(prompt(">"))
let toDoList = []
let statusArray = []


while(option !== 3){
   console.log(toDoList)
    if(option === 1){
        console.log("~ Creating a new to-do item ~")
        console.log("What is this to-do item called?")

        //add item
        let addItem = prompt("> ")
        while(addItem.length === 0){
            console.log("Invalid, Input cannot be empty")
            addItem = prompt("> ")
        }
        toDoList.push(addItem)

        
    
       //reprompt the user
      selectOption()
    }else if(option === 2){
        console.log("\n~ Completing a To-Do list item ~")
        console.log("Which item would you like to complete?")
        displayList()

        let newStatus = Number(prompt("> "))
        console.log("New status check: " + newStatus)
        console.log("Type check" + typeof newStatus)
        while(isNaN(newStatus) || newStatus > statusArray.length-1 || newStatus < 1){
            console.log("Please enter a number assigned to a item in the list: ")
            newStatus = Number(prompt(">"))
        }

        statusArray[newStatus-1] = true
        
        displayList()
     selectOption()


    }else{
        console.log("\nInvalid Operation")

        //reprompt user
      selectOption()
    }


    function displayList(){

        if(toDoList.length === 0){
            console.log("Your To-Do list is empty.")
        }else  {
            console.log(`You have ${toDoList.length} to do item(s)`)
        }


        for(let i = 0; i < toDoList.length; i++){

            let staus = ""

            if(statusArray[i] === false){
                status = "[incomplete]"
            }else if (statusArray[i] === true){

            }
        }

for(let i = 0; i < toDoList.length; i++){
    //to account for that numbers start at 1 not 0 - i+1
    //toDoList [i]
    console.log(`${i+1}. ${toDoList[i]}`)
}
    }

for(let i = 0; i < toDoList.length; i++){
    //to account for that numbers start at 1 not 0 - i+1
    //toDoList [i]
    console.log(`${i+1}. ${toDoList[i]}`)
}

 



    //reprompt the user
   
    






//Exiting Application
console.log("~Exiting To-Do list application~")





function selectOption(){
    console.log("~Select an action")
       console.log("\n[1] Create a to-do-option")
       console.log("[2] Complete a to-do-item")
       console.log("[3] Exit to-do list Application")
       option = Number(prompt("> "))
}
}


















/*
1. Figure out the UI
-console.log()
   -welcome message
   -different options(add task,complete task)
   -error message for invalid options
-prompts
   -numbers to decide which option using ifs
     1. adding a task/creating an item - prompt user for item to create
     2. mark task as complete - prompt user for which task is complete
     3. exit



while loop
  program does not have an ending, so we wnant to be able to prompt them indefinitley/until they decide to exit


display the to-do-list o the user
   -completion staus (complete or incomplete)
   -he name of the item
   -the number associated with the item
   -loop to display each item in the playlist





2. Add to-do items (choice === 1)
-prompt for the to-do item
-save the item by storing it in the array - .push()
-an array to keep track of toDo items -global variable

2.5 - hiow do we sset an item as incomplete
Any item in thee list is (incomplete) until we mark [complete]
incomplete by default


array of booleans
[true,       false,     true]status array
[Walk dog, get food, Run mile]toDoList array
   0         1         2      shared index

let status = []
by default when we add a new item, we want to add a false boolean to our status array.


1





3. complete to-do-items
-display cuurent items in the to-do list with their status
pick which toDo item to mark as complete - swap its status from false to true
make sure we display the updated list after




*/







