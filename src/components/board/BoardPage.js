import React, { useContext, useEffect, useState } from 'react'
import BoardDivStyle from './BoardStyle'
import bgImg from '../../images/bg-1.png'
import AddBoard from '../newBoard/AddBoard'
import BoardCard from '../newBoard/BoardCard'
import contextStore from '../../context/contextFile'


const BoardPage = () => {

    const {boardData} = useContext(contextStore)

  return (
    <BoardDivStyle>
        <div className='container'>
            <h1>My Board</h1>
            <img src={bgImg} alt="backgroundImage" className="bgimg" />


            <section className="boards">
                {boardData && boardData.map((val,indx)=><BoardCard key ={indx} ids={indx} name={val.Boardname} icon={val.icon} />)}
                <AddBoard/>
            </section>
        </div>

    </BoardDivStyle>
  )
}

export default BoardPage