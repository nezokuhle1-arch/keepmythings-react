import { useEffect, useState } from 'react';
import NoteCard from './components/NoteCard';
import CreateNoteForm from './components/CreateNoteForm';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const [notes, setNotes] = useState([
    { id: 1, 
      title: 'Test note', 
      content: 'If you can see this, state is working.',
      pinned: false,
      archived: false,
      reminderDate: null
    },

    { id: 2, 
      title: 'Second note', 
      content: 'Loop test.', 
      pinned: false, 
      archived: false,
      reminderDate: null
    }

  ]);

  // This function adds a new note to the notes state
  function handleAddNote(text, reminderDate) {
    const newNote = {
      id: Date.now(),
      title: '',
      content: text,
      pinned: false,
      archived: false,
      reminderDate: reminderDate
    };
    // This adds the new note to the notes state
    setNotes([...notes, newNote]);
  }

  // This function deletes a note
  function handleDeleteNote (id) {
    setNotes (notes.filter((note) => note.id !== id));
  }

  // This function toggles the pinned state of a note
  function handleTogglePin(id) {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  }

  // This function sorts the notes by pinned state
  const sortedNotes = [...notes].sort((a, b) => b.pinned - a.pinned);
  
  return (
    <div>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <CreateNoteForm onAddNote={handleAddNote} /> 
      <div className="notes-grid">
      {sortedNotes.map((note) => (
        <NoteCard key={note.id} note={note} onDeleteNote={handleDeleteNote} onTogglePin={handleTogglePin}/> // The NoteCard component is imported from NoteCard.jsx and is used to display the note.
      ))}
      </div>
    </div>
  );
}

export default App;