import React from "react";
import { Component } from "react";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { Box } from "./Box";
import { FormikContactForm } from "./FormikContactForm/FormikContactForm";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  formSubmitData = (data) => {
    const noPass = this.state.contacts.filter(item => item.name.toLowerCase() === data.name.toLowerCase());
    noPass.length < 1 ?
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data]
      })) : alert(`${data.name} alredy in contacts.`);
  }

  filterContactsName = (values) => {
    this.setState({
      filter: values.filter,
    })
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }))
  }

   filteredList = contacts =>  this.state.filter === '' ?
      contacts :
      contacts.filter(item => item.name.includes(this.state.filter));
  
  render() {
    const { contacts } = this.state;

    return (
      <Box
        m={4}
        p={4}
        height="100vh"
        bg='#f6f6f6'
        maxWidth='500px'
        ml='auto'
        mr='auto'
      >
        <FormikContactForm onNewVal={this.formSubmitData} />
        <ContactList
          data={this.filteredList(contacts)}
          deleteContact={this.deleteContact}>
          <Filter filterContactsName={this.filterContactsName} />
        </ContactList>
      </Box>)
  }
}



