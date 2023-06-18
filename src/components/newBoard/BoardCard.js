import React, { useEffect } from 'react'
import { CardDiv } from './BoardCardStyle'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { Link, useNavigate } from 'react-router-dom';

const BoardCard = ({ids,name,icon}) => {

    const navigate= useNavigate();
    const showOption=()=>{
        document.getElementById(`option-${ids}`).style.display="block"
    }
    const hideOption=()=>{
        document.getElementById(`option-${ids}`).style.display="none"
    }
    const onPostNavigate=()=>{
        navigate('/posts',{
            state:{ids,name,icon}
        })
    }

  return (
    <CardDiv>
        <div className="card">
            <h4>
                <span>{name}</span>
                <MoreVertTwoToneIcon onClick={showOption}/>
            </h4>
            <div className="option" id={`option-${ids}`} onMouseOut={hideOption}>

            </div>

            <img src={icon} alt="icon" onClick={onPostNavigate}  data-aos="zoom-in"/>
        </div>
    </CardDiv>
  )
}

export default BoardCard