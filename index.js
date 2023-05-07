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
            // Get
        case "get":
            const oneContact = await data.getContactById(id);
            return console.log(oneContact);
            // Add
        case "add":
            const addContact = await data.addContact({name, email, phone});
            return console.log(addContact);
            // Remove
        case "remove":
            const removeContact = await data.removeContact(id);
            return console.log(removeContact);
        default:
            console.log("Unknown action");
    }
};

// Yargs
const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);
