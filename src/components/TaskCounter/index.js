
import './TaskCounter.css'

function TaskCounter({completed, inCompleted, totalTasks}){
    
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

export {TaskCounter}