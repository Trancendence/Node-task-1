// Import
// const fs = require("fs/promises");
// const contacts = fs.require("./db");

const dataContacts = async ({ id, name, email, phone }) => {
    switch (action) {
        case "ready":
            const allContact = await contacts.getContacts();
            return console.log(allContact);
    }
};
