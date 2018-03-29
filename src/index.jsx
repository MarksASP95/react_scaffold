import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <h1>Hello world, its me Marco </h1>
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
