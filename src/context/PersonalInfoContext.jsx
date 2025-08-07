
import { createContext, useState, useEffect } from 'react';

const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = ({children}) => {
    const [personalInfo, setPersonalInfo] = useState([]);
    useEffect(() => {
        const getPersonalInfo = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/PersonalInfos');
                const data = await response.json();
                setPersonalInfo(data);
            } catch (error) {
                console.error("Kişisel bilgi alınırken hata oluştu:", error);
            }
        };
        getPersonalInfo();
    }, []);

    const personalInfoValues ={
        personalInfo,
        setPersonalInfo
    }
    return <PersonalInfoContext.Provider value={personalInfoValues}>
            {children}  
        </PersonalInfoContext.Provider >
    
        
}

export {PersonalInfoContext , PersonalInfoContextProvider} 


