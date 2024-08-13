import React from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route, Routes } from "react-router-dom";
//<Route path={["/game/:id", "/"]} >

// Allows me to route to home and game/32664 at the same  time
//<Home />
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/game/:id" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
