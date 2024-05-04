import './ContactsList.scss';




const ContactsList = ({ contacts, onDeleteContatct }) => {
  return (
    <ul className="contacts__list">
      {contacts.map(contact => (
        <li key={contact.id} className="contacts__item">
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContatct(contact.id)} className='contactsList__button'>Delete</button>
        </li>
      ))}
    </ul>
  );
} 
export default ContactsList;
