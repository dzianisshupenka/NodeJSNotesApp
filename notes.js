const fs = require('fs');
const chalk = require('chalk');
const { debug } = require('console');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!!'));
    } else {
        console.log(chalk.red.inverse('Note title is exist!'));
    }

}

const removeNote = title => {
    const notes = loadNotes();
    const newNote = notes.filter( note => note.title !== title )
    if (notes.length > newNote.length) {
        console.log(chalk.green.inverse('Note ' + title + ' removed!'))
        saveNotes(newNote);      
    } else console.log(chalk.red.inverse('Note ' + title + ' is not exist!'))
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const readNote = title => {
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);
    if (noteToRead) {
        console.log(chalk.blue(noteToRead.title));
        console.log(chalk.green(noteToRead.body));
    } else console.log(chalk.red.inverse('Note not found!!'));

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your notes: '))
    notes.forEach(el => console.log(chalk.blue(el.title)));
}

const loadNotes = () => {
    try {
        const dataBuffered = fs.readFileSync('notes.json');
        const dataJSON = dataBuffered.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }

}

module.exports = {
    addNote,
    removeNote,
    listNotes, 
    readNote
};