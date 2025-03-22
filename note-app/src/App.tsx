import { useEffect, useState } from "react";
import { NoteForm } from "@/features/note/NoteForm";
import { NoteList } from "@/features/note/NoteList";
import { NoteEdit } from "@/features/note/NoteEdit";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [showDeleted, setShowDeleted] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      const notes = await window.electronAPI.getNotes(showDeleted);
      setNotes(notes);
    }
    fetchNotes();
  }, [showDeleted]);

  const handleAddNote = async (values: { text: string }) => {
    const newNote = { id: Date.now(), text: values.text, deleted: false };
    await window.electronAPI.saveNote(newNote);
    const updatedNotes = await window.electronAPI.getNotes(showDeleted);
    setNotes(updatedNotes);
  };

  const handleDeleteNote = async (id: number) => {
    await window.electronAPI.deleteNote(id);
    const updatedNotes = await window.electronAPI.getNotes(showDeleted);
    setNotes(updatedNotes);
  };

  const handleEditNote = (note: Note) => {
    setSelectedNote(note);
    setIsEditModalOpen(true);
  };

  const handleUpdateNote = async (updatedNote: Note) => {
    await window.electronAPI.saveNote(updatedNote);
    const updatedNotes = await window.electronAPI.getNotes(showDeleted);
    setNotes(updatedNotes);
    setIsEditModalOpen(false);
  };

  const handleRestoreNote = async (id: number) => {
    await window.electronAPI.restoreNote(id);
    const updatedNotes = await window.electronAPI.getNotes(showDeleted);
    setNotes(updatedNotes);
  };

  return (
    <>
      <div className="mx-auto p-6 w-full max-w-3xl">
        <div className="w-full bg-slate-100 p-4 md:p-8 rounded-lg shadow-lg">
          <NoteForm onSubmit={handleAddNote} />
          <div className="border-t border-slate-200 mt-4 pt-4">
            <div className="mb-4">
              <label>
                <input
                  type="checkbox"
                  checked={showDeleted}
                  onChange={(e) => setShowDeleted(e.target.checked)}
                  className="mr-2 "
                />
                Show Deleted Notes
              </label>
            </div>
          </div>
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onEdit={handleEditNote}
            onRestore={handleRestoreNote}
            showDeleted={showDeleted}
          />
          {selectedNote && (
            <NoteEdit
              id={selectedNote.id}
              text={selectedNote.text}
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              onSave={handleUpdateNote}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
