const fs = require('fs')
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,    
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}
const removeNotes = function(title){
    // console.log("Note is Removed");
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
        return note.title !==title;
    })
       saveNotes(notesToKeep);
}

const listNotes = function(title){
    // console.log("Note is Removed");
    const notes = loadNotes();
    const list = notes.forEach(element => {
        console.log(element.title)
    });
   
    //    saveNotes(list);
}

const readNotes = (title)=>{
    debugger
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title )
    if(note){
    console.log(chalk.green(note.title))
    console.log(chalk.green(note.body))
    }
    else{
        console.log(chalk.red("Note not Found"))
    }
    }


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNotes,
    listNote: listNotes,
    readNote: readNotes
}