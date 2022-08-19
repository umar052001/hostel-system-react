import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/home-page";
import Navbar from "./components/navbar/navbar.component";
import SignIn from "./components/sign-in/sign-in.component";
import Owner from "./components/owner/owner.component";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </div>
  );
}

export default App;
