import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Listcom from './Listcom';

const Todolist = () => {
  const [item, setItem] = useState("");  
  const [newitem, setnewitem] = useState([]);
  const itemEvent = (event) =>{
    setItem(event.target.value);
  };
  const listofitem = () =>{
    setnewitem((prev)=>{
      return [...prev, item]
    });
    setItem(" ");
  };

  return(
    <>
   <div className='main_div'>
    <div className='center_div'>
    <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text'
        value={item}
        placeholder='Add an Item'
        onChange={itemEvent}
        />
       <Button className='newBtn' onClick={listofitem}>
        <AddTaskIcon/>
       </Button>
       <br/>
       <ol>

        {newitem.map((val) =>{
          return <Listcom text={val} />;
        })}
       </ol>
    </div>
   </div>
    </>
  );
}

export default Todolist;