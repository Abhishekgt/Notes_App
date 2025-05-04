import React, { createContext, useContext, useEffect, useState } from 'react';

const FIREBASE_DB_URL = import.meta.env.VITE_FIREBASE_DB_URL;

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notes from Firebase
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${FIREBASE_DB_URL}/notes.json`);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        if (data) {
          setNotes(
            Object.entries(data).map(([id, note]) => ({ id, ...note }))
          );
        } else {
          setNotes([]);
        }
      } catch (err) {
        setNotes([]);
        alert('Failed to fetch notes: ' + err.message);
      }
      setLoading(false);
    };
    fetchNotes();
  }, []);

  // Add note
  const addNote = async (title, content) => {
    const note = { title, content, createdAt: Date.now() };
    try {
      const res = await fetch(
        `${FIREBASE_DB_URL}/notes.json`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(note),
        }
      );
      if (!res.ok) throw new Error('Failed to add note');
      const data = await res.json();
      setNotes((prev) => [...prev, { id: data.name, ...note }]);
    } catch (err) {
      alert('Failed to add note: ' + err.message);
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    try {
      const res = await fetch(
        `${FIREBASE_DB_URL}/notes/${id}.json`,
        { method: 'DELETE' }
      );
      if (!res.ok) throw new Error('Failed to delete note');
      setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      alert('Failed to delete note: ' + err.message);
    }
  };

  return (
    <NotesContext.Provider value={{ notes, loading, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
