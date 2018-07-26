// Importando o React
import React, { Component } from 'react';
// Importando os Componentes OneStep
import OneStep from './create/OneStep/OneStep'
// Importando o component Main
import Main from './main'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      onestep:[],
     
    }
  }
  componentWillMount(){
    var onestep =[];
    onestep.push(<OneStep appContext={this}/>);
    this.setState({
                  onestep:OneStep
                    })
  }
  render() {
    return (
      <div className="App">
      {this.state.OneStep}
    </div>
    );
  }
}

export default App;