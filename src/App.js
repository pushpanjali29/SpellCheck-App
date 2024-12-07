import { useState } from 'react';

const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};


function App() {
  const[inputText , setInputText] = useState("");
  const [suggestion , setSuggestion] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

  const words = text.toLowerCase().split(/\s+/);
  const firstWrongWord = words.find(word => customDictionary[word]);

  if(firstWrongWord)
  {
    const correctWord = customDictionary[firstWrongWord];
    setSuggestion(`Did you mean: ${correctWord}?`);
  }
  else{
    setSuggestion("");
  }
};

    return (
    <div className="App">
      <h1>
        Spell Check and auto-Correction
        </h1>
        <br/>
        <textarea type='text' placeholder='Enter text...' 
        value={inputText}
        onChange={handleInputChange}>
        </textarea>
        {suggestion && (
        <div style={{ marginTop: "10px", color: "black", fontWeight: "bold" }}>
          {suggestion}
        </div>
      )}
    </div>
  );
}

export default App;
