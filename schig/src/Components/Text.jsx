import "./Text.css";

const Text = ({ text }) => {
  return (
    <>
      {text.map((line) => {
        return (
          <div key={line}>
            <p>{line}</p>
          </div>
        );
      })}
    </>
  );
};

export default Text;
