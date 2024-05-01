// import { nanoid } from 'nanoid';
import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';
import { nanoid } from 'nanoid';
import { Component } from 'react';



class App extends Component {

  state = {
    contacts: [],
    name: ''
  }



addContact = name => {
  const contact = {
    id: nanoid(),
    name,
  };

  this.setState(({contacts}) => ({
    contacts: [contact, ...contacts]
  }))
}

 

  render() {
const {contacts} = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsEditor contacts={contacts} onSubmit={this.addContact} name={this.state.name} />
          <h2>Contacts</h2>
         <ContactsList contacts={this.state.contacts} />
          

        
      </div>
    );
  }
}


// function App() {
//   return (
//     <div >
      
//     </div>
//   );
// }

export default App;
