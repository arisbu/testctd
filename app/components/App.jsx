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
        <Notes notes={notes} onDelete={this.deleteNote} />
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
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        //myColor: this.randomColor(),
        task: 'New task'
      }])
    });
  }  
  
  
  deleteNote = (id, e) => {
    e.stopPropagation();
    //alert('blah');
    this.setState({
        notes: this.state.notes.filter(note => note.id != id)
    });
  }
}



  
  

