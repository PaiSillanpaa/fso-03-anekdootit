import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}> {text} </button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  //const [votes, setVotes] = [0, 0, 0, 0, 0, 0, 0, 0];
  //console.log(anecdotes.length);
  // Array => [0,0,0,0,0,0,0,0]

  console.log(votes);

  if (selected > 8) {
    setSelected(0);
  }

  const handleVote = () => {
    const newVotes = [...votes];
    console.log(newVotes);
    newVotes[selected] += 1;
    console.log(newVotes);
    setVotes(newVotes);
  };

  const getMostVotedIndex = () => {
    return votes.indexOf(Math.max(...votes));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Anecdote has {votes[selected]} votes</p>
      <Button
        handleClick={() => setSelected(selected + 1)}
        text="Next Anecdote"
      />
      <Button handleClick={handleVote} text="vote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMostVotedIndex()]}</p>
      <p>has {votes[getMostVotedIndex()]}</p>
    </div>
  );
};

export default App;
