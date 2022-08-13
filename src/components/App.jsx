import React from "react";
import { Component } from "react";
//import { ContactForm } from "./ContactForm";
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
    console.log(data)
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

  onDeleteItem = (data) => {
    this.setState({contacts: data})
  }

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
      {/*<ContactForm
        onSubmit={this.formSubmitData}
    />*/}
        <ContactList data={this.state.filter === '' ?
        contacts :
        contacts.filter(item => item.name.includes(this.state.filter))}
        onDeleteItem={this.onDeleteItem}>
        <Filter filterContactsName={this.filterContactsName} />
        </ContactList>
      </Box>)
  }
}



