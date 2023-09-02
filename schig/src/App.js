import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Landing />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Practice />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
