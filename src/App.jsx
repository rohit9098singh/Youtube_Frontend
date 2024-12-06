import React from "react";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthProvider";
import { Routes ,Route} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Laoding";

function App() {
  const {loading,data}=useAuth();
  console.log("this is the whole data",data);
  
  return (
    <div >
      {loading && <Loading/>}
      <Navbar className="fixed top-0 w-[100%]" />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;