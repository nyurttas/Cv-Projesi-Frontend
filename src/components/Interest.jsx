import React from 'react'
import { InterestContext } from '../context/InterestContext'
import { useContext } from 'react'

const Interest = () => {
  const { interests } = useContext(InterestContext);
  return (
   <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">İlgi Alanlarım</h2>
       
        {
          interests.map(interest => (
            <div key={interest.id} className="interest-item">
             
              <p>{interest.description}</p>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Interest
