import React from "react";
import { useState, useEffect } from "react";
import { ContactList } from "./ContactList";
import { Box } from "./Box";
import { FormikContactForm } from "./FormikContactForm/FormikContactForm";
import { GlobalStyle } from "GlobalStyle";
import { Field2 } from './Filter2/Filter2';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const savedContacts = localStorage.getItem('contacts');
      const parsedsavedContacts = JSON.parse(savedContacts);
      setContacts(parsedsavedContacts);
    }
  }, []);

   const formSubmitData = (data) => {
    const noPass = contacts.filter(item => item.name.toLowerCase() === data.name.toLowerCase());
    if (noPass.length < 1) {
      setContacts([...contacts, data]);
      const savedContacts = JSON.stringify(contacts)
      localStorage.setItem('contacts', savedContacts)
    } else alert(`${data.name} alredy in contacts.`);
  }

  //const filterContactsName = values => setFilter(values.filter);

  const deleteContact = id => setContacts(prevState => { prevState.contacts.filter(item => item.id !== id) })
  
  const filteredList = contacts => filter === '' ?
    contacts :
    contacts.filter(item => item.name.includes(filter));

  const show = (data) => setFilter(data);

  return (<>
    <Box
      m={4}
      p={4}
      height="100vh"
      bg='#f6f6f6'
      maxWidth='500px'
      ml='auto'
      mr='auto'
    ><GlobalStyle />
      <FormikContactForm onNewVal={formSubmitData} />
      <ContactList
        data={filteredList(contacts)}
        deleteContact={deleteContact}>
        {/* <Filter filterContactsName={this.filterContactsName} />*/}
        <Field2 onChange={show} />
      </ContactList>
    </Box>
  </>
  )
}