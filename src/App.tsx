import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [urlLegal, setUrlLegality] = useState(false);
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  function handleChange(value: string) {
    const regEx = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (value.match(regEx)) {
      setUrlLegality(true);
      setUrl(value);
    }
    else {
      setUrlLegality(false);
      setUrl('');
    }
  }

  function handleClick(){

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: url})
    };
    console.log('to fetch : '+'http://localhost:3000/'+url)
    fetch('http://localhost:3000/create', requestOptions)
    .then((response) => response.json())
    .then((responseJson)=>{setShortenedUrl(responseJson.short)})
    .catch(()=>{
      console.log('error!') 
  })
  }
  
  return (
    <div>
      <input
        type="text"
        className="form-control"
        id="basic-url"
        aria-describedby="basic-addon3 basic-addon4"
        placeholder="www.google.com"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      {urlLegal && <Button onClick={handleClick}>SHORTEN</Button> }
      <p>{shortenedUrl}</p>
    </div>
  );
}

export default App;
