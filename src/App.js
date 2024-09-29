import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    let firstCorrection = "";


    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase(); 
      const correctedWord = customDictionary[word];
      
      if (correctedWord) {
        firstCorrection = correctedWord;
        break; 
      }
    }

    setSuggestedText(firstCorrection || "");
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
