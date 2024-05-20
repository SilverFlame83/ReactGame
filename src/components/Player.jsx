import { useState, useRef } from "react";

export default function Player() {
  //const [enteredPlayer, setEnteredPlayer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const userInput = useRef()

  // function inputHandler(event) {
  //   setSubmitted(false)
  //   setEnteredPlayer(event.target.value);
  // }

  function clickHandler() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? userInput.current.value : "unknown entity"}</h2>
      <p>
        <input type="text" ref={userInput} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
