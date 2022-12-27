import { useState } from "react";
import styles from "./styles.module.css";
import {sendMessage} from "../sockeApi";
import{useChat} from "../context/ChatContext"

function ChatForm() {
  const [message, setMessage] = useState("");

  const {setMessages} = useChat("");

  const handleSubbmit = (e) => {
    e.preventDefault();
    console.log(message)

    if (message.trim().length !== 0) {
    setMessages((prevState) =>[...prevState, {message, fromMe: true}])

    sendMessage(message);

    setMessage("");

    } else {
      console.log('input value is empty');
      e.onSubmit()
    }

    
  };

  return (
    <div>
      <form onSubmit={handleSubbmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value) }
        />
      </form>
    </div>
  );
}

export default ChatForm;
