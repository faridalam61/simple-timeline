import './App.css'
import EntryCard from './Components/EntryCard'
function App() {
  
  return (
   
     <div className="timeline">
      <EntryCard icon="solar:user-bold" title="This is a test title" color="#5390EB"/>
      <EntryCard icon="fluent:person-feedback-16-filled" title="This is a test title two" color="#DC395F"/>
      <EntryCard icon="fe:check" title="This is a test title two" color="#3FB883"/>
      <EntryCard icon="ic:twotone-browser-updated" title="This is a test title two" color="#FB8789"/>
      <EntryCard icon="ri:chat-follow-up-line" title="This is a test title two" color="#F2BB27"/> 
      <EntryCard icon="logos:google-meet" title="This is a test title two" color="#3FB883"/> 
      <EntryCard icon="clarity:chat-bubble-outline-badged" title="This is a test title two" color="#A259FF"/> 
      <EntryCard icon="ci:warning" title="This is a test title two" color="#E94235"/> 
      <EntryCard icon="ri:hourglass-fill" title="This is a test title two" color="#F2DF37"/> 
     </div>
    
  )
}

export default App
