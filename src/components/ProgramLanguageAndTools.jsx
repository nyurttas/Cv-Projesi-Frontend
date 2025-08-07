import React, { useContext } from 'react'
import { SkillContext } from '../context/SkillContext'

const ProgramLanguageAndTools = () => {
  const {programAndTools} = useContext(SkillContext)
  return (
    <>
    <div className="subheading mb-3">Programlama Dilleri &amp; Araçlar</div>
        <ul className="list-inline dev-icons">
          {
            programAndTools.map(item => <li className="list-inline-item" key={item?.id}><i className={item?.icon} /></li>)
          }
        </ul>
    </>
  )
}

export default ProgramLanguageAndTools