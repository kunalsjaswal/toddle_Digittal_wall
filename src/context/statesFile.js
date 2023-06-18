import { useState } from "react";
import contextStore from "./contextFile";
import beach from '../images/random icons/beach.png'
import fruits from '../images/random icons/fruits.png'
import games from '../images/random icons/games.png'
import love from '../images/random icons/love.png'
import ring from '../images/random icons/ring.png'
import running from '../images/random icons/running.png'
import snack from '../images/random icons/snack.png'
import study from '../images/random icons/study.png'

const StatesStore = (props)=>{

    const iconList = [beach,fruits,games,love,ring,running,snack,study]
    const [iconListSelection,seticonListSelection] =useState([0,0,0,0,0,0,0,0])
    const [iconIndex, seticonIndex] = useState(0)
    const [boardName, setboardName] = useState("")

    const [boardData, setBoardData] = useState([])
    
    const onCreateHandler=()=>{
        setBoardData([...boardData, {
            Boardname:boardName,
            icon:iconList[iconIndex]
        }])

        setboardName("")
        seticonListSelection([0,0,0,0,0,0,0,0])
    }

    return(
        <contextStore.Provider
            value={{
                boardData, setBoardData,
                iconList,
                iconListSelection,seticonListSelection,
                iconIndex, seticonIndex,onCreateHandler,
                boardName, setboardName,
                boardData
               
            }}
        >
            {props.children}
        </contextStore.Provider>
    )
}

export default StatesStore