const notesController = {};

const NoteModel = require('../models/Note');

notesController.getNotes = async (req, res) => {
    const notes = await NoteModel.find(); 
    res.json(notes);
}

notesController.getNote = async (req, res) => {
    const note = await NoteModel.findById(req.params.id);
    res.json(note);
}

notesController.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new NoteModel({
        title,
        content,
        author,
        date
    });
    await newNote.save();
    res.json({message: 'Note created'});
}

notesController.updateNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    await NoteModel.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author,
        date
    });
    res.json({message: 'Note updated'});
}

notesController.deleteNote = async (req, res) => {
    await NoteModel.findByIdAndRemove(req.params.id);
    res.json({message: 'Note deleted'});
}

module.exports = notesController;