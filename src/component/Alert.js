import React from 'react'

export default function Alert(props) {
  const capital=(word)=>{
return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
   <div style={{height:'50px'}}> {props.alert && <div>
      
<div id="alert-1" className={`flex p-4 mb-4 text-blue-800 rounded-lg bg-${props.alert.color}-800 dark:bg-${props.alert.color}-800 dark:text-blue-400`} role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div className="ml-3 text-sm font-medium">
  {capital(props.alert.type)}:{props.alert.mgs}
  </div>
  </div>
  
    </div>}
    </div>
  )
}
