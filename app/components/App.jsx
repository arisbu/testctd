import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';





export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React....'

        },
        {
          id: uuid.v4(),
          task: 'Do laundry'

        }
      ]
    };
  }
  
  
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.changeColors}>All New Colors!</button>
        <button onClick={this.addNote}>+</button>
        <Notes 
          notes={notes} 
          onNoteClick = {this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }
  
  
  changeColors = () => {
    var allNotes = this.state.notes;
    
    for (var k in allNotes)  {
      var myNote = allNotes[k];
      myNote.myColor = this.randomColor();
    }
    
    this.setState(allNotes);
  }
  
  
  
  
  randomColor = () => {
      // From https://www.paulirish.com/2009/random-hex-color-code-snippets/
      return '#'+Math.floor(Math.random()*16777215).toString(16);

  }  



  addNote = () => {
    // It would be possible to write this in an imperative style.
    // I.e., through `this.state.notes.push` and then
    // `this.setState({notes: this.state.notes})` to commit.
    //
    // I tend to favor functional style whenever that makes sense.
    // Even though it might take more code sometimes, I feel
    // the benefits (easy to reason about, no side effects)
    // more than make up for it.
    //
    // Libraries, such as Immutable.js, go a notch further.
    
    var allNotes = this.state.notes;
    
        console.log(`Pre Pre sort len = ${allNotes.length}`);
    
    allNotes = allNotes.concat([{
        id: uuid.v4(),
        //myColor: this.randomColor(),
        task: 'New task'
      }]);
      
    console.log(`Pre sort len = ${allNotes.length}`);
    
    allNotes = this.sortNote(allNotes);
    
    console.log(`Post sort len = ${allNotes.length}`);
    
    /*
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        //myColor: this.randomColor(),
        task: 'New task'
      }])
    });
    
    */
    
    this.setState({
      notes: allNotes
    });
    
  }  
  
  
  deleteNote = (id, e) => {
    e.stopPropagation();
    //alert('blah');
    this.setState({
        notes: this.state.notes.filter(note => note.id != id)
    });
  }
  
  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id ===id) {
          note.editing = true;
        }
        return note;
      })
    });
  }
  
  
  

  
  compareNotes = (a,b) => {
    if(a.task.toLowerCase() < b.task.toLowerCase())  
      return -1;
    if (a.task.toLowerCase() > b.task.toLowerCase())
      return 1;
    return 0;
  }

  sortNote = (allNotes) => {
    allNotes.sort(this.compareNotes);
    return allNotes;
  }


  editNote = (id, task) => {
    

    var allNotes = this.state.notes;
    
    allNotes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      });
    
    this.sortNote(allNotes);
    
    this.setState({
      // notes: this.state.notes.map(note => {
      notes: allNotes
    });
    
    
 


  }
  
  
}



  
  

