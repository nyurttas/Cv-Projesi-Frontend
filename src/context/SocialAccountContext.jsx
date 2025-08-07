
import { createContext, useState, useEffect } from 'react';


const SocialAccountContext = createContext();

const SocialAccountContextProvider    = ({children}) => {
    const [socialAccounts, setSocialAccounts] = useState([]);

    useEffect(() => {
        const getSocialAccounts = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/SocialAccounts');
                const data = await response.json();
                setSocialAccounts(data);
                
             } catch (error) {
                console.error("Sosyal hesap bilgileri getirilemedi:", error);
            }
        }
        getSocialAccounts();
    }, []);

    const socialAccountsValues = {
        socialAccounts,
        setSocialAccounts
    }
  return<SocialAccountContext.Provider value={socialAccountsValues}>
      {children}
    </SocialAccountContext.Provider>
  
}

export {SocialAccountContext, SocialAccountContextProvider};