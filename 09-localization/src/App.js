import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

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
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])
  
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
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

        <button onClick={() => setLocale("tr-TR")} >TR</button>
        <button onClick={() => setLocale("en-US")} >EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
