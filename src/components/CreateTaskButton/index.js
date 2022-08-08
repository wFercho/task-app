import './CreateTaskButton.css'

function CreateTaskButton({setOpenModal, openModal}){

    const handleClick = () => {
        setOpenModal(!openModal)
    }
     return(
        <div className="CreateTaskButton-container">
            <button className={`button ${openModal ? 'open':''}`} onClick={handleClick}>+</button>
        </div>
    )
}

export {CreateTaskButton}