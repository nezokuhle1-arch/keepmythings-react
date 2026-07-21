import { useState } from 'react';
import NoteCard from './components/NoteCard';
import CreateNoteForm from './components/CreateNoteForm';
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, 
      title: 'Test note', 
      content: 'If you can see this, state is working.',
      pinned: false,
      archived: false
    },

    { id: 2, 
      title: 'Second note', 
      content: 'Loop test.', 
      pinned: false, 
      archived: false 
    }

  ]);

  // This function adds a new note to the notes state
  function handleAddNote(text) {
    const newNote = {
      id: Date.now(),
      title: '',
      content: text,
      pinned: false,
      archived: false
    };
    // This adds the new note to the notes state
    setNotes([...notes, newNote]);
  }

  function handleDeleteNote (id) {
    setNotes (notes.filter((note) => note.id !== id));
  }



  return (
    <div>
      <Navbar />
      <h1>Keep Notes</h1>
      <CreateNoteForm onAddNote={handleAddNote} /> 
      <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDeleteNote={handleDeleteNote} /> // The NoteCard component is imported from NoteCard.jsx and is used to display the note.
      ))}
      </div>
    </div>
  );
}

export default App;