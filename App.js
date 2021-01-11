import './App.css';
import BoxForm from "./component/BoxForm";
import CreateBox from "./component/CreateBox";
import React, {useState} from 'react';


function App() {
  const [boxs,setBoxs] = useState({colors: [],});

  return (
    <div>
        <BoxForm boxs={boxs} setBoxs={setBoxs}></BoxForm>
        {boxs.colors.map ((color) => (<CreateBox color={color}/>) )}
    </div>
  );
}

export default App;
