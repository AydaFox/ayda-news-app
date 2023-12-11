import './App.css'
import { UserProvider } from './contexts/UserContext';
import Articles from './Components/Articles';
import Header from './Components/Header'
import Nav from './Components/Nav'

function App() {
  return (
    <UserProvider>
      <Header />
      <Nav />
      <Articles />
    </UserProvider>
  );
}

export default App