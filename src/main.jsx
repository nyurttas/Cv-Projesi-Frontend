import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersonalInfoContextProvider } from './context/PersonalInfoContext.jsx'
import { ContactContextProvider } from './context/ContactContext.jsx'
import { AboutContextProvider } from './context/AboutContext.jsx'
import { SocialAccountContextProvider } from './context/SocialAccountContext.jsx'
import { EducationContextProvider } from './context/EducationContext.jsx'
import { ExperienceContextProvider } from './context/ExperienceContext.jsx'
import { InterestContextProvider } from './context/InterestContext.jsx'
import { SkillContextProvider } from './context/SkillContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <ContactContextProvider>
        <AboutContextProvider>
          <SocialAccountContextProvider>
            <EducationContextProvider>
              <ExperienceContextProvider>
                <InterestContextProvider>
                  <SkillContextProvider>
                    <App />
                  </SkillContextProvider>
                </InterestContextProvider>
              </ExperienceContextProvider>
            </EducationContextProvider>
          </SocialAccountContextProvider>
        </AboutContextProvider>
      </ContactContextProvider>
    </PersonalInfoContextProvider>
  </StrictMode>,
)
