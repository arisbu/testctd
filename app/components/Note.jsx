import React from 'react';


export default ({children, ...props}) => (
    <div {...props}>
        {children}
    </div>
);
    


/*
export default class Note extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        var myStyle = {
            color : this.props.myColor
        }
        
        return (
            <div>
                <span style={myStyle}>{this.props.task}</span>
                <button onClick={this.props.onDelete}>x</button>
            </div>
        )
    }
}
*/

/*
export default ({onDelete, task, myColor}) => (

    <div>
        
        <span style={{color:{myColor}}} >{task}</span>
        <span>{myColor}</span>
        <button onClick={onDelete}>x</button>
    </div>
        
);
    */
    
  //<span style=color:{myColor} > {task} </span>