import { useContext } from 'react'
import { TasksContext } from '../TasksContext'

import './TaskCounter.css'

export default function TaskCounter(){
    const {completed, inCompleted, totalTasks} = useContext(TasksContext)
    return(
        <div className='TaskCounter-container'>
            <h2 className="TaskCounter-title">
                Completas: {completed}/{totalTasks}
            </h2>
            <h2 className='TaskCounter-title'>
                Incompletas: {inCompleted}/{totalTasks}
            </h2>
        </div>
    )
}