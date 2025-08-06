// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocumentDetail from "./pages/DocumentDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document/:id" element={<DocumentDetail />} />
      </Routes>
    </Router>
  );
}
