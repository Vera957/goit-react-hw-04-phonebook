
//not in use

import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput, Button } from "style/style";
//import propTypes from 'prop-types';

export class ContactForm extends Component { ///проп - функция formSubmitData
    state = {
        name: '',
        number: '',
        id: ''
    };
    nameId = nanoid();
    numberId = nanoid();


    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name)
            this.setState({ [name]: value, id: nanoid() });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state); //передача через проп-функцию стейта в род.елемент 
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        return (<StyledForm>
            <h1>Phonebook</h1>

            <form onSubmit={this.handleSubmit}>
                <StyledLabel>Name
                    <StyledInput
                        id={this.nameId}
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    /></StyledLabel>
                <StyledLabel>Number
                    <StyledInput
                        id={this.numberId}
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    /></StyledLabel>
                <Button type="submit" onSubmit={this.addContact}>Add contact</Button>
            </form>
        </StyledForm>
        )
    }
}

export default ContactForm;




