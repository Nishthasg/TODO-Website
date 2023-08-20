import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Listcom=(props) =>{
    const [line, setline] = useState(false);
    const cutit = () =>{
     setline(true);
    };
  return(
  <div className='todo_style'>
    <span onClick={cutit}>
   <DeleteIcon className='deleteIcon'/>
    </span>
    <li style={{textDecoration: line? "line-through" : "none"}}>{props.text}</li>
  </div>
  );
}

export default Listcom;