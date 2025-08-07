import { createContext, useState, useEffect } from 'react';


const InterestContext = createContext();

const InterestContextProvider = ({children}) => {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const getInterests = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/Interests');
                const data = await response.json();
                setInterests(data);

             } catch (error) {
                console.error("İlgi alanları getirilemedi:", error);
            }
        }
        getInterests();
    }, []);

    const interestValues = {
        interests,
        setInterests
    }
  return<InterestContext.Provider value={interestValues}>
      {children}
    </InterestContext.Provider>
  
}

export {InterestContext, InterestContextProvider};
