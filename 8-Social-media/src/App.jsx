import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compo/Header";
import Footer from "./compo/Footer";
import Sidebar from "./compo/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
