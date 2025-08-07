import { createContext, useState, useEffect } from 'react';


const EducationContext = createContext();


const EducationContextProvider = ({children}) => {
    const [educations, setEducations] = useState([]);
    useEffect(() => {
        const getEducations = async () => {
            try {
                const response = await fetch('https://localhost:7123/api/Educations');
                const data = await response.json();
                setEducations(data);
            } catch (error) {
                console.error("Eğitim bilgileri alınırken hata oluştu:", error);
            }
        };
        getEducations();
    }, []);

    const educationValues = {
        educations,
        setEducations
    }

  return<EducationContext.Provider value={educationValues}>
       {children}
     </EducationContext.Provider>
}

export { EducationContext, EducationContextProvider }
