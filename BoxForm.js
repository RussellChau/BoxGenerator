import React,{useState} from 'react';

const BoxForm = ({boxs,setBoxs}) => {
    const [newColor,setNewColor] = useState("");

    const addNewColor = (e) => {
        e.preventDefault();
        setBoxs({
            ...boxs, 
            colors:[...boxs.colors,newColor]
        });      
    }

    return (
        <form>
            <label>Color</label>
            <input type="text" className="" name="newColor"  value={newColor} onChange={(e) => setNewColor(e.target.value)} />
            <button onClick={addNewColor}>Add</button>
        </form>
    );
};

export default BoxForm;
