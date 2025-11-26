import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - Pagina Non Trovata</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
