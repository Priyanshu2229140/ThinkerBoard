import Note from "../models/Note.js";

export const getAllNotes = async(req, res) => {
  res.status(200).send("You just fetched all notes");
  try {
    const notes = await Note.find();
  } catch (error) {
    
  }
};

export const createNote = async(req, res) => {
  res.status(201).json({ message: "Note created" });
};
export const updateNote = async(req, res) => {
  res.status(200).json({ message: "Note updated" });
};
export const deleteNote = async(req, res) => {
  res.status(200).json({ message: "Note deleted" });
};
