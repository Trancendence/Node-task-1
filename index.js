// Import
// const fs = require("fs/promises");
// const contacts = fs.require("./db");

const dataContacts = async ({ id, name, email, phone }) => {
    switch (action) {
        case "listContacts":
            const allContact = await contacts.getContacts();
            return console.log(allContact);
        case "getContactById":
            const oneContact = await contacts.getContactsById(id);
            return console.log(oneContact);
        case "addContact":
            const addContact = await contacts.addContact;
            return console.log(addContact);
        default:
            console.log("Unknown action");
    }
};
