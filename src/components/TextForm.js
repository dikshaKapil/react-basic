import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [email, setEmailText] = useState('');
    // setText('new text');
    const handleOnChange= (event)=>{
        // console.log('onChange');
        setText(event.target.value);
    } 
   
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
    const copyText=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const clearText=()=>{
        setText('');
        setEmailText('');
    }
    const extractEmail=()=>{
        let newEmail = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);

        setEmailText(newEmail);
    }
    const removeExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
    <div>
        <div className='container' style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='light'?'white':'grey'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}} rows="10"></textarea>
                <input type='label' className="form-control" id="myEmail" value={email} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}}></input>

               </div>
               <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
               <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
               <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
               <button className="btn btn-primary mx-2" onClick={extractEmail}>Extract Email</button>
               <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
               <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='light'?'white':'grey'}}>
            <h1>Your Text Summary</h1>
            <p>{text.replace(/\n$/gm, '').split(/\n/).length} Paragraphs, {(text.split(" ").length)+(text.split(/\n/).length-1)} Words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Write Something to preview.'}</p>
        </div>

        </div>
  )
}
