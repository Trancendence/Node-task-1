// Import
const fs = require("fs/promises");
const path = require("node:path");
const contactsPath = path.join(__dirname, "db/contacts.json");

const getContacts = async () => {
  const contact = await fs.readFile(contactsPath);
  return JSON.parse(contact);
};

// TODO: задокументировать каждую функцию
function listContacts() {
  
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