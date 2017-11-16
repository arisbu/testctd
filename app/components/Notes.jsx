import React from 'react';

import Note from './Note';

export default ({notes, onDelete=() => {}}) => (
  <ul> {notes.map(({id, myColor, task}) =>
    <li key={id}>
      <Note 
        onDelete={onDelete.bind(null, id)}
      task = {task}
      myColor = {myColor} />
    </li>
    )}</ul>
    
  )

/*

export default class Notes extends React.Component {
    render(){
      return (
          <ul>{notes.map(note =>
    <li key={note.id}>{note.task} {note.id}</li>
  )}</ul>
      );
    }
}

*/