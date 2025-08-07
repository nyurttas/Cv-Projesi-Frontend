import { createContext, useState, useEffect } from 'react';


const ContactContext = createContext();

const ContactContextProvider    = ({children}) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/Contacts');
                const data = await response.json();
                setContacts(data);
                
             } catch (error) {
                console.error("İletişim bilgileri getirilemedi:", error);
            }
        }
        getContacts();
    }, []);

    const contactValues = {
        contacts,
        setContacts
    }
  return<ContactContext.Provider value={contactValues}>
      {children}
    </ContactContext.Provider>
  
}

export {ContactContext, ContactContextProvider};
