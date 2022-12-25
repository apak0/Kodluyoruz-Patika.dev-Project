import { useState } from "react";
import styles from "./styles.module.css";
import {sendMessage} from "../sockeApi"

function ChatForm() {
  const [message, setMessage] = useState("");

  const handleSubbmit = (e) => {
    e.preventDefault();
    console.log(message)


    

    setMessage("")
  }

  return (
    <div>
      <form onSubmit={handleSubbmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
