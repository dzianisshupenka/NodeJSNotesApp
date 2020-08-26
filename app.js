//const validator = require('validator');
const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// console.log(process.argv);

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,    //true - обязательное поле,
            type: 'string'  // тип поля - строка
        },
        body: {
            describe: 'Note body', 
            demandOption: true,    //true - обязательное поле,
            type: 'string'  // тип поля - строка
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse();

// const text = notes.getNotes();

// console.log(text);

// console.log(chalk.yellow.bgRed.bold('Success!'))

// console.log(process.argv[2])
//console.log(validator.isEmail('kjsdksd@d.comassdvsdvsdv'))

// const fs = require('fs');
//fs.writeFileSync('notes.txt', 'My Node notes here!')
// fs.appendFileSync('notes.txt', '\nI made this line by myself')
// fs.appendFileSync('notes.txt', '\nOne more line')
// fs.appendFileSync('notes.txt', '\nAgain')
// fs.appendFileSync('notes.txt', '\nAnd again!!')
// let gg = require('./untils.js');
// gg(5,6)