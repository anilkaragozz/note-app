interface Window {
  electronAPI: {
    getNotes: (showDeleted: boolean) => Promise<Note[]>;
    saveNote: (note: Note) => Promise<Note>;
    deleteNote: (id: number) => Promise<void>;
    restoreNote: (id: number) => Promise<void>;
  };
}

interface Note {
  id: number;
  text: string;
  deleted?: boolean;
}

interface NoteFormProps {
  onSubmit: (values: z.infer<typeof noteFormSchema>) => void;
}

interface NoteListProps {
  notes: { id: number; text: string; deleted?: boolean }[];
  onDelete: (id: number) => void;
  onEdit: (note: { id: number; text: string }) => void;
  onRestore: (id: number) => void;
  showDeleted: boolean;
}

interface NoteEditProps {
  id: number;
  text: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedNote: { id: number; text: string }) => void;
}
