import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import { NotesProvider } from './contexts/NotesContext';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript storageKey="chakra-ui-color-mode" />
      <NotesProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NotesProvider>
    </ChakraProvider>
  );
}

export default App;
