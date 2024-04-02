import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Header />
          <Main />
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
