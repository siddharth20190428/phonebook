import "./App.css";
import Home from "./components/Home/Home";
// import SignUp from "./components/SignUp/SignUp";
import ContactList from "./components/ContactList/ContactList";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Todo: change name of signup component */}
        {/* because we have both signin and signup in same container */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/contacts" element={<ContactList />} />
      </Routes>
    </div>
  );
}

export default App;
