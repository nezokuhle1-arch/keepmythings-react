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
            <button onClick={() => onDeleteNote(note.id)} aria-label="Delete note">
                <span className="material-symbols-outlined">delete</span>
            </button>
            <button onClick={() => onTogglePin(note.id)} aria-label={note.pinned ? 'Unpin note' : 'Pin note'}>
                <span className="material-symbols-outlined">keep</span>
            </button>
        </div>
    );
}

export default NoteCard;