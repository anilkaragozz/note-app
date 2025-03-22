const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getNotes: (showDeleted) => ipcRenderer.invoke("get-notes", showDeleted),
  saveNote: (note) => ipcRenderer.invoke("save-note", note),
  deleteNote: (id) => ipcRenderer.invoke("delete-note", id),
  restoreNote: (id) => ipcRenderer.invoke("restore-note", id),
});
