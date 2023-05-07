// Import
// const fs = require("fs/promises");
// const contacts = fs.require("./db");
const data = require("./contacts")

const dataContacts = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "listContacts":
            const allContact = await data.getContacts();
            return console.log(allContact);
        case "getContactById":
            const oneContact = await data.getContactsById(id);
            return console.log(oneContact);
        case "addContact":
            const addContact = await data.addContact;
            return console.log(addContact);
        default:
            console.log("Unknown action");
    }
};

dataContacts({action: "listContacts"});