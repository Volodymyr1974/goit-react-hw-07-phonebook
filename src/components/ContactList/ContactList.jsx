import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from "redux/contactsSlice";
import PropTypes from 'prop-types';

const ContactList = ({ data }) => {

    const filter = useSelector(getFilter);

    const normalizedFilter = filter.toLowerCase();
    const items = data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ul >
            {(items.map(item => (
                <li key={item.id}>
                    <ContactItem
                        item={item}
                    />

                </li>
            )))}
        </ul>
    );
};
ContactList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object.isRequired)
};

export default ContactList;