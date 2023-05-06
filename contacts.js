// Import
const fs = require("fs/promises");
const path = require("node:path");
const contactsPath = require("db/contacts.json");

const getContacts = async () => {
  const contact = await fs.readFile(contactsPath, require("buffer"));
  return JSON.parse(contacts);
};

// TODO: задокументировать каждую функцию
function listContacts() {
    // ...твой код
  }
  
  function getContactById(contactId) {
    // ...твой код
  }
  
  function removeContact(contactId) {
    // ...твой код
  }
  
  function addContact(name, email, phone) {
    // ...твой код
  }


module.exports = { getContacts };