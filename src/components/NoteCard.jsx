function NoteCard({ note, onDeleteNote }) {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </div>
    );
}

export default NoteCard;