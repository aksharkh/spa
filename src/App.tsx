import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Treatments from './pages/Treatments';
import Bookings from './pages/Bookings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Layout>
  );
}

export default App;
