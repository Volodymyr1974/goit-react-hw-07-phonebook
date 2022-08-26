import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from './Filter/Filter';
import style from './App.module.css';
import { useGetContactsQuery } from '../redux/contactsApi';
import { Toaster } from 'react-hot-toast';
import Loader from "../components/Loader/Loader";

function App() {
  const { data, isLoading } = useGetContactsQuery();

  return (

    <div className={style.box}>
      <h1>Phonebook</h1>
      <ContactForm
        data={data}
      />
      <h2>Contacts</h2>
      <Filter
      />
      {isLoading && < Loader />}
      {!isLoading && <ContactList
        data={data}
      />}
      <Toaster />
    </div>
  );
}

export default App;