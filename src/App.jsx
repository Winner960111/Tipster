import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";

function App() {
  return (
    <div className="bg-back_color">
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
