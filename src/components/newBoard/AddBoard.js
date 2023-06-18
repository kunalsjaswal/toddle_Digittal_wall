import React, { useContext, useEffect, useState } from 'react'
import AddBoardDiv from './AddBoardStyle'
import addSymb from '../../images/add.png'
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import { Button, TextField } from '@mui/material';

import contextStore from '../../context/contextFile';

const AddBoard = () => {

    // context 
    const {boardName,setboardName,onCreateHandler,iconList,iconListSelection,seticonListSelection,iconIndex, seticonIndex} = useContext(contextStore)

    useEffect(()=>{

    },[])

    // board add menu opener functions 
    const openBoardHandler=()=>{
        document.getElementById('open-menu-1').style.display="block";
        setboardName("")
        seticonListSelection([0,0,0,0,0,0,0,0])

    }
    const closeBoardHandler=()=>{
        document.getElementById('open-menu-1').style.display="none";
        setboardName("")
        seticonListSelection([0,0,0,0,0,0,0,0])

    }

    const selectIcon=(indx)=>{
        const nextShapes = iconListSelection.map((val,ind) => {
            if (ind === indx) {
                seticonIndex(indx) 
              return 1;
            } else {
              return 0;
            }
        })
        seticonListSelection(nextShapes)
    }

   


  return (
    <AddBoardDiv>
        <div className="add-task" onClick={openBoardHandler}  data-aos="zoom-in" data-aos-duration="1000">
            <img src={addSymb} alt="adding" className='add-symb' />
            <h4>Create new Board</h4>
        </div>

        <div className="new-board-menu" id='open-menu-1' >

            <div className="close-window"  onClick={closeBoardHandler}></div>
            
            <div className="inner-content" >
                <div className="head">
                    <h3>Add a name for your board</h3>
                    <ClearTwoToneIcon fontSize='large' style={{cursor:"pointer"}} onClick={closeBoardHandler}/>
                </div>

                <div className="body">
                    <TextField id="outlined-basic" 
                        className='textfield-1' 
                        placeholder='I enjoy reading Books..' 
                        variant="outlined" 
                        value={boardName}
                        onChange={ev=>setboardName(ev.target.value)}
                        inputProps={{ maxLength: 30 }}
                    />
                    <h4>Select icon for your board</h4>
                    <div className="corousel">
                        {
                            iconList.map((val,indx)=>(
                                <img src={val} 
                                    alt="icons" 
                                    id={`img-icon-${indx}`} 
                                    key={indx} 
                                    style={{border:iconListSelection[indx]===1?"1px solid black":"0"}}
                                    onClick={()=>selectIcon(indx)}/>
                            ))
                        }
                        
                        
                    </div>

                </div>
                <div className="footer">
                    <Button variant="contained"
                        color='error' 
                        className='btn-2'
                        onClick={onCreateHandler}>
                        Create board
                    </Button>
                </div>
                

            </div>

        </div>
    </AddBoardDiv>
  )
}

export default AddBoard