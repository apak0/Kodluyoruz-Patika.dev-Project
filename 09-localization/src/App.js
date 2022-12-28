import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: "Üç yeni mesajınız var"
  },
  "en-US": {
    title:"hello world",
    description:"You have 3 new messages"
  }
};

function App() {
  const [lang, setLang] = useState("tr-TR");
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
      <FormattedMessage
          id="title"
        />

        <p>
          <FormattedMessage
          id="description"
          />
        </p>
        <br/>
        <br/>

        <button onClick={() => setLang("tr-TR")} >TR</button>
        <button onClick={() => setLang("en-US")} >EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
