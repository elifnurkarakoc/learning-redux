import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const { dark } = useSelector((state) => state.site);
  return (
    <div className={dark ? "dark" : "light"}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
