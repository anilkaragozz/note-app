const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Store = require("electron-store").default;
const store = new Store();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Store notes in Electron Store
if (!store.has("notes")) {
  store.set("notes", []);
}

ipcMain.handle("get-notes", (event, showDeleted = false) => {
  const notes = store.get("notes");
  if (showDeleted) {
    return notes;
  } else {
    return notes.filter((note) => !note.deleted);
  }
});

ipcMain.handle("save-note", (event, note) => {
  const notes = store.get("notes");
  if (note.id) {
    const index = notes.findIndex((n) => n.id === note.id);
    if (index !== -1) {
      notes[index] = note;
    } else {
      notes.push(note);
    }
  } else {
    note.id = Date.now().toString();
    note.deleted = false;
    notes.push(note);
  }
  store.set("notes", notes);
  return note;
});

ipcMain.handle("delete-note", (event, id) => {
  const notes = store.get("notes");
  const index = notes.findIndex((note) => note.id === id);
  notes[index].deleted = true;
  store.set("notes", notes);
});

ipcMain.handle("restore-note", (event, id) => {
  const notes = store.get("notes");
  const index = notes.findIndex((note) => note.id === id);
  notes[index].deleted = false;
  store.set("notes", notes);
});
//
