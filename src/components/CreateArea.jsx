import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [inputText, setInputText] = useState({
        title: "",
        takeNote: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setInputText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        
    }

    function addNote(event) {
        props.onAdd(inputText);
        setInputText({
            title: '',
            takeNote: ''
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }
 
    return (
        <div>
        <form className="create-note">
            {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} /> )}
            <textarea onChange={handleChange} onClick={expand} name="takeNote" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={inputText.takeNote} />
        <Zoom in={isExpanded}>
            <Fab onClick={addNote}><AddIcon /></Fab>
        </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
