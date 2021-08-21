import React, {useState} from "react";

function CreateArea(props) {

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
 
    return (
        <div>
        <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />
            <textarea onChange={handleChange} name="takeNote" placeholder="Take a note..." rows="3" value={inputText.takeNote} />
            <button onClick={addNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
