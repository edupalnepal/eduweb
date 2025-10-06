import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Quiz from "./Pages/Quiz";
import PageNotFound from "./Pages/PageNotFound";
import "./Components/Homepage/General.css";
import "./Components/Homepage/Queries.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
