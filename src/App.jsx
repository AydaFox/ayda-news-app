import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:topic" element={<Articles />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<Error msg="Route not found"/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
