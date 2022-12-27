import "./App.css";
import { useEffect } from "react";
import { ChatProvider } from "./context/ChatContext";
import Container from "./components/Container";

function App() {

  useEffect(() => {
    document.title = 'React Chat App';
  }, []);

  return (
    <div className="App">
      <ChatProvider>
        <Container/>
      </ChatProvider>

    </div>
  );
}

export default App;
