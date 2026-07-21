**Keepmythings React**

ZAIO Institute assignment - Google Keep clone

A simplified clone of Google Keep, built with React (via Vite) as part of a Zaio Institute assignment.

Live demo: https://keep-my-reactor.netlify.app/

Features

* Create and delete notes
* Pin notes to keep them at the top of the grid
* Set an optional reminder date/time on a note, with a visual overdue indicator
* Light/dark theme toggle, persisted across page reloads
* Responsive, grid-based note layout

Tech stack

* React (via Vite)
* Plain CSS, using CSS custom properties for theming — no CSS framework
* ESLint
* Deployed on Netlify

Project structure
├── index.html
├── src/
│   ├── App.jsx              # Owns notes state and theme state
│   ├── main.jsx              # Mounts App into index.html
│   ├── index.css              # All styling, including theme variables
│   └── components/
│       ├── Navbar.jsx          # Logo, title, search bar, theme toggle
│       ├── CreateNoteForm.jsx  # Controlled inputs for note text + reminder
│       └── NoteCard.jsx        # Displays one note, handles delete/pin actions
└── README.md

**How it works** 

* Notes are held in React state at the top of the component tree, in App.jsx, and passed down to child components as props.
* Adding, deleting, and pinning a note all flow back up to App.jsx through callback props, rather than child components managing their own copies of the data.
* Each note is stored as an object with an id, title, content, pinned flag, archived flag, and an optional reminder date.
* Pinned notes are sorted to the front of the grid before rendering.
* The theme toggle switches a data-theme attribute on the page and saves the choice to localStorage, so it persists across reloads.

**Known limitations**

* Notes themselves are held only in React state and are not persisted to localStorage, refreshing the page resets the note list back to its starting data. (Only the theme preference is persisted.)
* The search bar in the navbar is currently a visual element only and is not yet wired to filter notes.
* Labels, a sidebar, checklist-style notes, and archiving (though the underlying data field exists) are out of scope for this version.
* Data is local to the browser and is not synced across devices.

AI-assisted development

The dark mode toggle and the reminders feature were built with the help of Cursor. The base clone and the pin-to-top feature were built without AI assistance. A walkthrough of where Cursor helped and where manual verification/fixes were needed is covered in the accompanying Loom video.

Author
Built by Nezokuhle Tshukulwana for the Zaio Institute Google Keep Clone (React) assignment.

Github:https://github.com/nezokuhle1-arch/keepmythings-react.git 