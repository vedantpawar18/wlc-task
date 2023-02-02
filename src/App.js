import React, { useState } from "react";
// import "./styles.css";
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";

export default function App() {
  const [link, setLink] =useState("")
  const [fileName, setfileName] =useState("")
  return (
    <div className="App">
      <div>
        <ReactOneDriveFilePicker
        clientID="c3e71009-3dd7-4fc8-9127-2de5ac14c89f"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          console.log(JSON.stringify(result.value[0].webUrl))
          setfileName((result.value[0].name))
          setLink((result.value[0].webUrl))
        }}
        onCancel={(result) => {
          alert("No file selected");
        }}
      >
        <button>Open Picker</button>
      </ReactOneDriveFilePicker>
      <div>
        {
        link ? <a target="_blank" href={link}>Link:{link}</a>:""
        }
      </div>
      <div>
        {
        link ? <p>If link doesn't opens in very first attempt, please click it again.</p>:""
        }
      </div>
      <div>
        {
        fileName ? <p>Name: {fileName}</p>:""
        }
      </div>
      <div>
         <button>Upload to oneDrive</button>
      </div>
      </div>
    </div>
  );
}