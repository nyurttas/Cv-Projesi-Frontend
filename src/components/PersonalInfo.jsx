import React from 'react'
import { useContext } from 'react';
import { PersonalInfoContext } from '../context/PersonalInfoContext.jsx';

const PersonalInfo = () => {
  const {personalInfo} = useContext(PersonalInfoContext);
  return (
    <h1 className="mb-0">
          {personalInfo[0]?.firstName}
          <span className="text-primary">{personalInfo[0]?.lastName}</span>
        </h1>
 
  )
}

export default PersonalInfo
