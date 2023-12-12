import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <LoadingProvider>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
          </Routes>
        </LoadingProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
