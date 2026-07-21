function NoteCard({ note, onDeleteNote, onTogglePin }) {
    const isOverdue =
        note.reminderDate && new Date(note.reminderDate) < new Date();

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            {note.reminderDate && (
                <span className={`reminder ${isOverdue ? 'overdue' : ''}`}>
                    {isOverdue ? 'Overdue: ' : 'Reminder: '}
                    {new Date(note.reminderDate).toLocaleString()}
                </span>
            )}
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            <button onClick={() => onTogglePin(note.id)}>{note.pinned ? 'Unpin' : 'Pin'}</button>
        </div>
    );
}

export default NoteCard;