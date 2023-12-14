import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:topic" element={<Articles />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
