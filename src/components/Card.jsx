import React from "react";

function Notes(props){
  return (
    <div className="note-box">
      <div className="note-text">
        <h4>{props.title}</h4>
        <p>{props.msg}</p>
      </div>
    </div>
  )
}

export default Notes;