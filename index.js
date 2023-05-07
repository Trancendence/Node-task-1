// Import
// const fs = require("fs/promises");
// const contacts = fs.require("./db");
const data = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContact = await data.getContacts();
            return console.log(allContact);
        case "get":
            const oneContact = await data.getContactById(id);
            return console.log(oneContact);
        case "add":
            const addContact = await data.addContact({name, email, phone});
            return console.log(addContact);
        case "remove":
            const removeContact = await data.removeContact(id);
            return console.log(removeContact);
        default:
            console.log("Unknown action");
    }
};

// invokeAction({action: "list"});
// invokeAction({action: "get", id:"AeHIrLTr6JkxGE6SN-0Rw"});
// invokeAction({action: "add", name: "Allen Raymond", email: "nulla.ante@vestibul.co.uk", phone: "(992) 914-3792"});
invokeAction({action: "remove", id: "AeHIrLTr6JkxGE6SN-0Rw"});