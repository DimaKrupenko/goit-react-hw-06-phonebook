import React from 'react';
import Form from './Form/Form'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList';



const App = () => {

  // const [contacts, setContacts] =  useState(() => {
  //   return JSON.parse(localStorage.getItem('contact') ?? [])
  // } );   
  
  // const [filter, setFilter] = useState('')
  
  

 
    // dispatch(addContacts(contacts));
      // const nameFilter = contacts.filter(cont => cont.name.includes(contacts.name))
      // const nameLength = nameFilter.length
      
       
      // if (nameLength === 1) {
      //   return  alert(contacts.name, 'is already in contacts')
      // }
      
      // setContacts(prevState => 
      // // const { name, number, id } = prevState;
     
      //   [contact, ...prevState])
    
    
  

 

  
  // useEffect(() => {
  //   window.localStorage.setItem('contact', JSON.stringify(contacts))
    
  // }, [contacts])

    
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
          <h1>PhoneBook</h1>
          <Form/>
          
          <h2>Contacts</h2>
          <Filter/>
          
          <ContactList/>
      </div>
        
      </div>
    );
  };

export default App
