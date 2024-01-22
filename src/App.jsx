import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HtmlTagRemoverApp from "./container/TagRemover";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HtmlTagRemoverApp />
    </>
  );
}

export default App;
