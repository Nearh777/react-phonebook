import { Component } from 'react';
import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import './App.scss';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,

    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };


  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
     
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };



  render() {
    const { contacts, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1 className='title__app'>Phonebook</h1>
        <ContactsEditor
          contacts={contacts}
          onSubmit={this.addContact}
          number={number}
        /> 
        
        <Filter value={filter} onChange={this.onChangeFilter} />
         <h2>Contacts</h2>
        <ContactsList contacts={visibleContacts} onDeleteContatct={this.deleteContact} />
      </div>
    );
  }
}

export default App;





// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// // import './components/ContactsEditor/ContactsEditor.scss';




// // const inishialValues = {
// //   name: '',
// //   number: '',
  
// // };

// // const validationSchema = yup.object().shape({
// //   name: yup.string().required('Name is required'),
// //   number: yup.number().required('Number is required'),
// // });





// // const ContactsEditor = () => {

// // const handleSubmit = (values, { resetForm }) => {
// //   console.log(values);
// //   resetForm();
// // }


// // return (
// //   <Formik inishialValues={inishialValues}
// //           onSubmit={handleSubmit}
// //           validationSchema={validationSchema}>
// //     <Form className="form__contacts">
// //       <div className="form__contacts-wrapper">
// //         <label htmlFor="name" className="form__contacts-label">
// //           Name
// //           <Field type="text" name="name" className="form__contacts-input" />
// //           <ErrorMessage name="name" component="div" className="form__error" />
// //         </label>
// //         <label htmlFor="number" className="form__contacts-label">
// //           Number
// //           <Field type="tel" name="number" className="form__contacts-input" />
// //           <ErrorMessage name="number" component="div" className="form__error" />
// //         </label>
// //         <button type="submit" className="form__contacts-button">
// //           Add contact
// //         </button>
// //       </div>
// //     </Form>

// //   </Formik> 
// // )

// // }

// const schema = yup.object().shape({
//   login: yup.string().required(),
//   password: yup.string().min(6).max(16).required(),
// });

// const initialValues = {
//   login: '',
//   password: '',
// };



// export const LoginForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     const { login, password } = values;
//     console.log(login);
//     console.log(password)
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <Form autoComplete="off">
//         <label htmlFor="login">
//           Login
//           <Field type="text" name="login" />
//           <ErrorMessage name="login" component="div" />
//         </label>
//         <br />
//         <label htmlFor="password">
//           Password
//           <Field type="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//         </label>
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };