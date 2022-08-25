import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from './Filter/Filter';
import style from './App.module.css';


function App() {
  return (
    <div className={style.box}>
      <h1>Phonebook</h1>
      <ContactForm
      />
      <h2>Contacts</h2>
      <Filter
      />
      <ContactList
      />
    </div>
  );
}

export default App;