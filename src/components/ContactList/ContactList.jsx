import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from "redux/contactsSlice";


const ContactList = () => {
    const dispatch = useDispatch();
    const contactsItems = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const normalizedFilter = filter.toLowerCase();
    const vizibleContacts = contactsItems.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
        <ul >
            {vizibleContacts.map(({ id, name, number }) => (
                <li key={id}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDeleteContact={() => dispatch(deleteContact(id))}
                    />

                </li>
            ))}
        </ul>
    );
};


export default ContactList;