import React from 'react'
import { useContext } from 'react';
import { ContactContext } from '../context/ContactContext.jsx';

const Contact = () => {
  const { contacts } = useContext(ContactContext);
  const info = contacts[0];

  return (
   <div className="subheading mb-5">
          {info?.address} · {info?.city} · {info?.town} ·  
          {info?.phone} ·
         
          <a href={`mailto:${info?.email}`}>{info?.email}</a>
        </div>
  )
}

export default Contact
