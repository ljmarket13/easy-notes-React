import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea'

const App = () => {

    const [items, setItems] = useState([]);

    function addItem(newNote) {
        setItems((prevItems) => {
            return [...prevItems, newNote];
        })
    }

    function deleteNote(id) {
        setItems(prevItems => {
            return prevItems.filter((newNotes, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
        <Header / >
        <CreateArea onAdd = {addItem}/> 
        {items.map((newNotes, index) => {
                return (<Note key = {index}
                    id = {index}
                    title = {newNotes.title}
                    content = {newNotes.takeNote}
                    onDelete = {deleteNote} />
                )
            })
        }
        <Footer / >
        </div>
    )
}

export default App;