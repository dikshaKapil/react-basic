import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText('new text');
    const handleUpClick=()=>{
        // console.log('upper case was clicked.'+text);
        let newText=text.toUpperCase();
            setText(newText);
    }
    const handleDownClick=()=>{
        // console.log('upper case was clicked.'+text);
        let newText=text.toLowerCase();
            setText(newText);
    }
    const handleOnChange= (event)=>{
        // console.log('onChange');
        setText(event.target.value);
    }
  return (
    <div>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
               </div>
               <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
               <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>

        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

        </div>
  )
}
