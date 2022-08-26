import React, { useState } from "react";
import style from './ContactForm.module.css';
import toast from 'react-hot-toast';
import { useAddContactMutation } from '../../redux/contactsApi';
import PropTypes from 'prop-types';


const ContactForm = ({ data }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactData = { name, number };
    const [addContact, { isLoading }] = useAddContactMutation();
    const contactsItems = data;

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
    const handleAddContact = async values => {
        try {
            await addContact(values);
            toast.success('Контакт додано');
            resetForm();
        } catch (error) {
            toast.error('Помилка при додаваннi контакту');
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        contactsItems.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        ) ?
            (toast.error(`Упс...Контакт ${name} вже є у Вашому списку `)) :
            (handleAddContact(contactData));
        console.log(contactData);

    };

    const resetForm = () => {
        setName(""); setNumber("");
    };
    // console.log(addContact());
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
                    type="submit" className={style.form_button} disabled={isLoading}> Add contact</button>
            </form></div>
    );
};
ContactForm.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object.isRequired)
};


export default ContactForm;