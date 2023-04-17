import React,{ useState } from "react"

export default function TextForm(props) {
  const [text,setText]=useState("");
  const upClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("changed to uppercase","success","green");

  }
  const loClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("changed to lowercase","success","green");
  }
  const copyText=()=>{
    var text=document.getElementById("ta");
    
    navigator.clipboard.writeText(text.value);
   
    props.showAlert("The text have been coppied to clipbord","success","green");
  }
  const textChange=(event)=>{
setText(event.target.value);
  }
  let b=props.mode;
  if(b==="black")
  {
     b="white"
  }
  else{
    b="black"
  }
  return (
    <>
    <div>
      <div className="my-3">
      <label htmlFor="ta" className={`text-${b}`}>{props.heading}</label>
      <textarea id='ta' rows={8} placeholder="Textarea" value={text} onChange={textChange} className={`w-full ml-10 border-solid border-2 border-black-900 rounded-md p-5 bg-${props.mode}`}></textarea>
      </div>
      </div>
      <div>
      <button className="bg-blue-700 text-white rounded h-7 px-9 mx-10" onClick={upClick}>To UPPER Case</button>
      <button className="bg-blue-700 text-white rounded h-7 px-9 mx-10" onClick={loClick}>To lower Case</button>
      <button className="bg-blue-700 text-white rounded h-7 px-9 mx-10" onClick={copyText}>Copy text to clipboard</button>
    </div>
    <div>
     <p className={`text-${b}`}>{text.trim().length} characters and {text.replace(/\n/g," ").split(" ").filter(value => value!=="").length} words</p>
     <p className={`text-${b}`}>{0.08*text.split(" ").length}min to read the text </p> 
     <p className={`text${b} font-semibold mb-4`}>Preview</p>
    <p className={`text-${b}`}>{text}</p>
    </div>
    </>
  )
}
