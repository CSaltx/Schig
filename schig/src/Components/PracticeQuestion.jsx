import "./PracticeQuestion.css";

const PracticeQuestion = ({ question, choices }) => {
  return (
    <>
      <p>Practice Question!</p>
      <p>{question}</p>
      {choices.map((choice) => {
        <button>{choice}</button>;
      })}
    </>
  );
};

export default PracticeQuestion;
