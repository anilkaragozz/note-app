import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Pencil, RotateCcw } from "lucide-react";

export const NoteList: React.FC<NoteListProps> = ({
  notes,
  onDelete,
  onEdit,
  onRestore,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Note Description</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notes.map((note) => (
          <TableRow key={note.id}>
            <TableCell>{note.text}</TableCell>
            <TableCell className="text-right">
              <Button
                onClick={() => onDelete(note.id)}
                className="bg-red-600 hover:bg-red-400"
              >
                <Trash2 />
              </Button>
              <Button
                onClick={() => onEdit(note)}
                className="bg-green-600 hover:bg-green-400"
              >
                <Pencil />
              </Button>
              <Button
                onClick={() => onRestore(note.id)}
                className="bg-gray-600 hover:bg-gray-400"
                disabled={!note.deleted}
              >
                <RotateCcw />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
