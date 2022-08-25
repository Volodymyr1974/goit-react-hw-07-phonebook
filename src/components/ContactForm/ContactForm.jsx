import React, { useState } from "react";
import style from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from "redux/contactsSlice";


const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactData = { id: nanoid(), name, number };
    const dispatch = useDispatch();
    const contactsItems = useSelector(getContacts);

    const onFormChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        contactsItems.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        ) ?
            (alert(`${name} is already in contacts`)) :
            dispatch(addContact(contactData));
        console.log(contactData);
        resetForm();
    };

    const resetForm = () => {
        setName(""); setNumber("");
    };
    console.log(addContact());
    return (
        <div className={style.form_box}>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className={style.form_label}> Name</p>
                    <input className={style.form_input}
                        value={name}
                        onChange={onFormChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label>
                    <p className={style.form_label}>Number</p>
                    <input className={style.form_input}
                        value={number}
                        onChange={onFormChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <button
                    type="submit" className={style.form_button}> Add contact</button>
            </form></div>
    );
}

export default ContactForm;