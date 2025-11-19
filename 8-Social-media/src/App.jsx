import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compo/Header";
import Footer from "./compo/Footer";
import Sidebar from "./compo/Sidebar";
import CreatePost from "./compo/CreatePost";
import PostList from "./compo/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />

        {selectedTab === "Home" ? <PostList /> : <CreatePost />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
