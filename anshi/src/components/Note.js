import React from 'react';
import './Note.css';

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <h5 className="note-title">{note.title}</h5>
      <p className="note-content">{note.content}</p>
      <button className="delete-button" onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default Note;
