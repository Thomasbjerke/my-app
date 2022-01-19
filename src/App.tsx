import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdressaparkenService from "./services/AdressaparkenService";

function App() {
  let adressaparkenService = new AdressaparkenService();
  adressaparkenService.getSensorData("tc").then((res: any) => {
    console.log(res);
    console.log(res[0].value);
  });
  //console.log("test i app.tsx", data);
  return (
    <div className="App">
      <p>Test</p>
    </div>
  );
}

export default App;
