import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';
import toast from 'react-hot-toast';

const ContactItem = ({ item }) => {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    const handleDeleteContact = async values => {
        try {
            await deleteContact(values);
            toast.success('Контакт видалено');

        } catch (error) {
            toast.error('Помилка при видаленні контакту');
            console.log(error);
        }
    };
    return (
        <div className={style.item}>
            {`${item.name} :  ${item.number}`}
            <button className={style.item_button}
                onClick={() => handleDeleteContact(item.id)}
                disabled={isLoading}
                type="button"
            >
                Delete
            </button>
        </div>


    )
};
ContactItem.propTypes = {
    items: PropTypes.object,
};
export default ContactItem;