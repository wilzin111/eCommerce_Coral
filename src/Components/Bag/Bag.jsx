import { useState, useContext} from "react";

function Bag(props) {
    const [open, setOpen] = useState(props.isOpen);
    console.log(open)
    
    if (props.isOpen) {
        return (
            <div>
                <button onClick={() => setOpen(false)}>A</button>
            </div>
        )
    }
    return null;
}

export default Bag;