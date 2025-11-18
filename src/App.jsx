import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compo/Header";
import Footer from "./compo/Footer";
import Sidebar from "./compo/Sidebar";
import CreatePost from "./compo/CreatePost";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <CreatePost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
