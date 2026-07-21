import { useState } from 'react';

function CreateNoteForm({ onAddNote }) {
  const [text, setText] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // This stops the page from reloading the forms do this by default
    onAddNote(text, reminderDate || null); // This sends the note text and optional reminder to App
    setText(''); // This clears the input back to empty
    setReminderDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input
        type="datetime-local"
        value={reminderDate}
        onChange={(e) => setReminderDate(e.target.value)}
        aria-label="Reminder date and time"
      />
      <button type="submit" aria-label="Add note">
        <span className="material-symbols-outlined">add_notes</span>
      </button>
    </form>
  );
}

export default CreateNoteForm;