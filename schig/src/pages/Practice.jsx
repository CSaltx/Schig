import "./Practice.css";
import Text from "../Components/Text";
import PracticeQuestion from "../Components/PracticeQuestion";

const Practice = () => {
  const title = "Demo Course";
  const video = "/demovid.mp4";
  const demotext = ["this is line one", "this is line two"];
  const demoquestion1 = "What color is the sky?";
  const demochoices1 = ["The sky is purple", "The sky is blue"];
  return (
    <>
      <p className="title">{title}</p>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support videos.
      </video>
      <Text text={demotext} />
      <PracticeQuestion question={demoquestion1} choices={demochoices1} />
    </>
  );
};

export default Practice;
