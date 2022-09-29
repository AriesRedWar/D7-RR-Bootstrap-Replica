import "./App.css";
import TopNavbar from "./Components/Navbar";
import Background from "./Components/Background";
import StoreListings from "./Components/Home";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
