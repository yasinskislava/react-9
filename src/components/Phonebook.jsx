export default function Phonebook({obj}) {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            let contactName = e.target.elements.contactName.value;
            let contactNumber = e.target.elements.contactNumber.value;
            obj.setState({contacts: [...obj.state.contacts,{ name: contactName, number: contactNumber },],});
            e.target.elements.contactName.value = "";
            e.target.elements.contactNumber.value = "";
          }}>
          <label htmlFor="name">
            Name
            <input type="text" name="contactName" pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required/>
          </label>
          <label htmlFor="number">
            Number
            <input type="tel" name="contactNumber" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required/>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>);
}