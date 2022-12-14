
import './TaskCounter.css'

function TaskCounter({completed, inCompleted, totalTasks, loading}){
    
    return(
        <div className={`${loading ? "disabled":"TaskCounter-container"}`}>
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