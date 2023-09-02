import "./Practice.css";
import Text from "../Components/Text";

const Practice = () => {
  const title = "Demo Course";
  const video = "/demovid.mp4";
  const demotext = ["this is line one", "this is line two"];
  return (
    <>
      <p className="title">{title}</p>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support videos.
      </video>
      <Text text={demotext} />
    </>
  );
};

export default Practice;
