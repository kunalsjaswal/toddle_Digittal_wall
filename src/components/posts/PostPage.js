import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { PostDiv } from './PostStyle';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

const PostPage = () => {
    const { state } = useLocation();
    const navigate=useNavigate()

  return (
    <PostDiv>
        <h1>    
            <ArrowBackIosNewTwoToneIcon style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}/>
            <span>{state.name}</span>
        </h1>

    </PostDiv>
  )
}

export default PostPage