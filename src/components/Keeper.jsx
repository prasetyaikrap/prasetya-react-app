import React from "react";
import "../css/styles.css";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import notes from "./dbnotes.js"

const noteCard = notes.map(noteinfo => 
  <Card 
    key={noteinfo.id}
    title={noteinfo.title} 
    msg={noteinfo.msg} 
  />
  );
function App(){
  return (
    <div>
      <Heading />
      <div className="main-container">
        <div className="note-container">
          {noteCard}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;