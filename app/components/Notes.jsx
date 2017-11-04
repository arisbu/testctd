import React from 'react';



/* */
export default ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
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