import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Articles from './Components/Articles';
import Header from './Components/Header'
import Nav from './Components/Nav'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App