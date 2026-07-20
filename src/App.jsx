import { useState } from 'react';
import NoteCard from './components/NoteCard';

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

  return (
    <div>
      <h1>Keep Notes</h1>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} /> // The NoteCard component is imported from NoteCard.jsx and is used to display the note.
      ))}
    </div>
  );
}

export default App;