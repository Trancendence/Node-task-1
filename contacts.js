// Import
const fs = require("fs/promises");
const path = require("node:path");
const contactsPath = path.join(__dirname, "contacts.json");

const getContacts = async () => {
  const contact = await fs.readFile(contactsPath, "utf-8");
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