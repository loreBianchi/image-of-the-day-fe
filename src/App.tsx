import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Header />
      <main className="container mx-auto px-4 pb-16">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 - Pagina Non Trovata</h1>} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
