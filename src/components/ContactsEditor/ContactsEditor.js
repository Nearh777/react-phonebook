import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './ContactsEditor.scss';






const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  number: yup.number().required('Number is required'),
});


class ContactsEditor extends Component {
  state = {
    name: "",
    number: "",
  };

  render() {
    const handleSubmit = (values, { resetForm }) => {
      const { name, number } = values;
      const { contacts } = this.props;
      const isExist = contacts.some(contact => contact.name === name);
      if (isExist) {
          alert(`${name} is already in contacts`);
          return;
      }
      this.props.onSubmit(name, number);
      resetForm();
    };

    return (
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form__contacts'>

<label htmlFor="name" className='form__contacts-label'>Name</label>
          <Field name="name" type="text" className='form__contacts-input'/>
          <ErrorMessage component='div'  name="name" className='form__error' />

          <label htmlFor="tel" className='form__contacts-label'>Phone</label>
          <Field name="number" type="tel" className='form__contacts-input'/>
          <ErrorMessage component='div' name="number" className='form__error'/>

          <button type="submit" className='form__contacts-btn'>Submit</button>

        </Form>
      </Formik>
    );
  }
}






export default ContactsEditor;



// class ContactsEditor extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   // handleSubmit = e => {
//   //   e.preventDefault();
//   //   const { name, number } = this.state;
//   //   const { contacts } = this.props;

//   //   if (name.trim() === '' || number.trim() === '') {
//   //        return;
//   //   }

//   //   const isExistContact = contacts.some(
//   //     contact => contact.name.toLowerCase() === name.toLowerCase()
//   //   );
//   //   if (isExistContact) {
//   //     alert(`${name} is already in contacts`);
//   //     return;
//   //   }

//   //   this.props.onSubmit(name.trim(), number.trim());
//   //   resetForm();
//   // };

//   render() {
    
  

//     // const handleSubmit = ({name, number}, { resetForm }) => {
//     //   // const { name, number } = this.state;
//     //   const { contacts } = this.props;

//     //   if (name.trim() === '' || number.trim() === '') {
//     //     return;
//     //   }

//     //   const isExistContact = contacts.some(
//     //     contact => contact.name.toLowerCase() === name.toLowerCase()
//     //   );
//     //   if (isExistContact) {
//     //     alert(`${name} is already in contacts`);
//     //     return;
//     //   }

//     //   this.props.onSubmit(name.trim(), number.trim());
//     //   resetForm();
//     // };

//   const  handleSubmit = (value, { resetForm }) => {
// console.log(value);
// resetForm();
// }
//     return (
//       <Formik
//         inishialValues={inishialValues}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <Form
//           autoComplete="off"
//           onSubmit={this.handleSubmit}
//           className="form__contacts"
//         >
//           <div className="form__contacts-wrapper">
//             <label htmlFor="name" className="form__contacts-label">
//               Name
//               <Field
//                 type="text"
//                 name="name"
//                 // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 // required
//                 // value={name}
//                 onChange={this.handleChange}
//                 className="form__contacts-input"
//               />
//               <ErrorMessage name="name" component="div" className="form__error" />
//             </label>
//             <label htmlFor="number" className="form__contacts-label">
//               Number
//               <Field
//                 type="tel"
//                 name="number"
//                 // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 // required
//                 // value={number}
//                 onChange={this.handleChange}
//                 className="form__contacts-input"
//               />
//               <ErrorMessage
//                 name="number"
//                 component="div"
//                 className="form__error"
//               />
//             </label>
//             <button type="submit" className="form__contacts-button">
//               Add contact
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     );
//   }
// }
