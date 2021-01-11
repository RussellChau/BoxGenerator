import React from 'react';

const CreateBox = ({color}) => {
    const boxDetails = {
        backgroundColor:[color],
        width:"500px",
        height:"500px",
        display:"inline-block",
    }

    return (<div style={boxDetails}></div>);
};

export default CreateBox;
