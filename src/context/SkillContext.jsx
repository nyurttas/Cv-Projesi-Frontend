import React, { createContext, useEffect, useState } from 'react'


const SkillContext = createContext();

const SkillContextProvider = ({children}) => {
    const [programAndTools, setProgramAndTools] = useState([]);
    const [workflows, setWorkflows] = useState([]);

    const getProgramAndTools = async() => {
        try {
            const response = await fetch("https://localhost:7123/api/Skills/GetProgramLanguageAndTools");
            const data = await response.json();
            setProgramAndTools(data);
        } catch (error) {
            console.error("Programlama dilleri ve araçlar getirilemedi...",error);
        }
    }
    const getWorkflows = async() => {
        try {
            const response = await fetch("https://localhost:7123/api/Skills/GetWorkflows");
            const data = await response.json();
            setWorkflows(data);
        } catch (error) {
            console.error("İş akışları getirilemedi...",error);
        }
    }

    useEffect(() => {
        getProgramAndTools();
        getWorkflows();
    },[]);

    const skillValues = {
        programAndTools,
        workflows,
        setProgramAndTools,
        setWorkflows
    }

  return <SkillContext.Provider value={skillValues}>
    {children}
  </SkillContext.Provider>
}

export { SkillContext, SkillContextProvider }