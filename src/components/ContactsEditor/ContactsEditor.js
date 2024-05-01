import { Component } from 'react';
import './ContactsEditor.scss';

class ContactsEditor extends Component {
  state = {
    name: '',
  };

handleChange = e => {
    this.setState({ name: e.target.value });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='form__contacts'>
<div className='form__contacts-wrapper'>
<label className='form__contacts-label'>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            className='form__contacts-input'
          />
        </label>
        <button type="submit" className='form__contacts-button'>Add contact</button>
</div>
      </form>
    );
  }
}

export default ContactsEditor;
