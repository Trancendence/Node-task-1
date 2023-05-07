// Import
const fs = require("fs/promises");
const path = require("node:path");
const {nanoid} = require("nanoid")
const contactsPath = path.join(__dirname, "db/contacts.json");
const updateContacts = async (contact) => 
await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));


  // List
    const getContacts = async () => {
    const contact = await fs.readFile(contactsPath);
    return JSON.parse(contact);
  };


  // Get
    const getContactById = async (id) => {
    const contact = await getContacts();
    const result = contact.find(item => item.id === id);
    return result || null;
  };


  // Add
    const addContact = async(data) => {
    const contacts = await getContacts();
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  }

  // Remove
    const removeContact = async (id) => {
    const contacts = await getContacts();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1){
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return result;
    };


// Export
  module.exports = { 
  getContacts,
  getContactById,
  addContact,
  removeContact,
  };