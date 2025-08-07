import { createContext, useState, useEffect } from 'react';


const AboutContext = createContext();


const AboutContextProvider = ({children}) => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        const getAbouts = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/Abouts');
                const data = await response.json();
                setAbouts(data);
            } catch (error) {
                console.error("Hakkında bilgileri alınırken hata oluştu:", error);
            }
        };
        getAbouts();
    }, []);

    const aboutValues = {
        abouts,
        setAbouts
    }

  return<AboutContext.Provider value={aboutValues}>
       {children}
     </AboutContext.Provider>
}

export { AboutContext, AboutContextProvider }
