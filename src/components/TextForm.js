import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const updateVlaue = (event) => {
    setText(event.target.value);
  }
  const handleUpperCase = () => {
    // console.log("clicked on uppercase");
    let txt = text.toUpperCase();
    setText(txt);
  }

  const handleLowerCase = () => {
    // console.log("clicked on uppercase");
    let txt = text.toLowerCase();
    setText(txt);
  }
  return (
    <>
      <div className='container'>
          <h2>{props.heading}</h2>
          <div className="form-group">
              <textarea value={text} onChange={updateVlaue} className="form-control" id="txt" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpperCase} >Convert To UpperCase</button>
          <button className="btn btn-primary mx-3" onClick={handleLowerCase} >Convert To LowerCase</button>
      </div>
      <div className="container">
        <p>the sentance contains {text.split(" ").length} words and {text.length} charectors</p>
        <p>{0.008 * text.split(" ").length} minuts is required to read this Sentance</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
