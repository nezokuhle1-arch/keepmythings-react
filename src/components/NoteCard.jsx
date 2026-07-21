function NoteCard({ note, onDeleteNote, onTogglePin }) {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            <button onClick={() => onTogglePin(note.id)}>{note.pinned ? 'Unpin' : 'Pin'}</button>
        </div>
    );
}

export default NoteCard;