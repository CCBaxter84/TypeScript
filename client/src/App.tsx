import { FC } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Container from "./components/Container";

const App: FC = () => {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}

export default App;
