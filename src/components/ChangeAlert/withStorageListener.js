import { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponetWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change)=>{
        if(change.key === 'Tasks_v1'){
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        props.sincronize()
        setStorageChange(false)
    }

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
}

export { withStorageListener };
