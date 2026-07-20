import { useState } from 'react';

function CreateNoteForm({ onAddNote }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // This stops the page from reloading the forms do this by default
    onAddNote(text); // This calls the onAddNote function with the text state when the form is submitted
    setText(''); // This clears the input back to empty
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add note</button>
    </form>
  );
}

export default CreateNoteForm;