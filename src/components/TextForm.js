import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLwClick=()=>{
        let newText2 = text.toLowerCase();

        setText(newText2);
        props.showAlert("converted to lowercase","success")
    }
   const  handleClearTextClick=()=>{
        
        setText('');
        props.showAlert("text cleared successfully","success")
    }
    const handleOnChnage=(event)=>{
        setText(event.target.value);
      
    }
    const[text,setText]=useState('Enter Text Here');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white':'black'}}>
           <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode==='dark' ? 'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChnage}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark' ? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} word, {text.length} character</p>
            <p>Avg time is {0.008*(text.split(" ").length)} word per minute</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
    )
}


