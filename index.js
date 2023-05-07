// Import
const data = require("./contacts");
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");



const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        // List
        case "list":
            const allContact = await data.getContacts();
            return console.log(allContact);
            break;
            // Get
        case "get":
            const oneContact = await data.getContactById(id);
            return console.log(oneContact);
            break;
            // Add
        case "add":
            const addContact = await data.addContact({name, email, phone});
            return console.log(addContact);
            break;
            // Remove
        case "remove":
            const removeContact = await data.removeContact(id);
            return console.log(removeContact);
            break;
        default:
            console.log("Unknown action");
            break;
    }
};

// Yargs
const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);
