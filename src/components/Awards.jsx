import React from 'react'
import { useContext } from 'react';
import { AwardContext } from '../context/AwardContext.jsx';


const Awards = () => {
  const { awards } = useContext(AwardContext);

  return (
 <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5"> Sertifikalar</h2>
        {
          awards.map((award) => (
            <div key={award.id} className="resume-award">
              <h3 className="mb-0">{award.title}</h3>
            
              <p className="mb-5">{award.description}</p>
              <p className="mb-5">{award.organisation}</p>
              <p className="mb-5">{new Date(award.dateAt).toLocaleDateString()}</p>

       

            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Awards
