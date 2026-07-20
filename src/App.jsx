import { useState } from 'react';

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
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}

export default App;