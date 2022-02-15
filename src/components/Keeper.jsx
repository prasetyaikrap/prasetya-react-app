import React from "react";
import "../css/styles.css";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

function showCards() {
  const notes = [
    {
      id: "1",
      title: "Day 1 - Marvel Meetup",
      msg: "Prepare for annual Marvel Meeting on ComicCon"
    },
    {
      id: "2",
      title: "Day 2 - Doctor Strange 2",
      msg: "Watching Doctor Strange 2 Multiverse of Madness"
    },
    {
      id: "3",
      title: "Day 3 - Doctor Strange 2",
      msg: "Watching Doctor Strange 2 Multiverse of Madness"
    },
    {
      id: "4",
      title: "Day 4 - Doctor Strange 2",
      msg: "Watching Doctor Strange 2 Multiverse of Madness"
    }
  ];
  let cards = [];
  notes.forEach(card => {
    cards.push(<Card title={card.title} msg={card.msg} />);
  });
  return cards
}

function App(){
  return (
    <div>
      <Heading />
      <div className="main-container">
        <div className="note-container">
          {showCards()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;