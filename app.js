var fs = require('fs');
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
// var msg = note();

// console.log(validator.isEmail('ankit'));
// console.log(validator.sURL());
// console.log(chalk.blue('success'));
// console.log(chalk.red.bgWhite.inverse.bold('success'));
// console.log(process.argv)
// console.log(yargs.argv);
// console.log(yargs.argv.title[0]);
// console.log(yargs.argv);

// console.log(yargs);
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });

yargs.command({
  command: 'add',
  describe: 'Add a new Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Command is removed Properly',
  handler: () => {
    console.log('Command is removed successfully');
  }
})



yargs.command({
  command:'update',
  describe:'Updated functionality',
  builder:{
  title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
  },
    body:{
      describe:'Body Data',
      demandOption:true,
      type:true
    }
},
  handler: function(argv){
    console.log('Data is updated successfully '+ argv.body);
  }
})

yargs.parse();