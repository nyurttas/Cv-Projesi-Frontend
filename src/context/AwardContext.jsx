import { createContext, useState, useEffect } from 'react';


const AwardContext = createContext();


const AwardContextProvider = ({children}) => {
    const [awards, setAwards] = useState([]);
    useEffect(() => {
        const getAwards = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/Certificates');
                const data = await response.json();
                setAwards(data);
            } catch (error) {
                console.error("Sertifika bilgileri alınırken hata oluştu:", error);
            }
        };
        getAwards();
    }, []);

    const awardValues = {
        awards,
        setAwards
    }

  return<AwardContext.Provider value={awardValues}>
       {children}
     </AwardContext.Provider>
}

export { AwardContext, AwardContextProvider }
