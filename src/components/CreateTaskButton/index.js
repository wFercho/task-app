import { useContext } from 'react'
import { TasksContext } from '../TasksContext'

import './CreateTaskButton.css'

export default function CreateTaskButton(){

    const {setOpenModal, openModal} = useContext(TasksContext)
    const handleClick = () => {
        setOpenModal(!openModal)
    }
     return(
        <div className="CreateTaskButton-container">
            <button className={`button ${openModal ? 'open':''}`} onClick={handleClick}>+</button>
        </div>
    )
}