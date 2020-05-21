import React,{Component} from 'react';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      display:"0",
      equation:""
    }
    this.numInput= this.numInput.bind(this)
    this.operInput= this.operInput.bind(this)
    this.clearInput= this.clearInput.bind(this)
    this.calculate = this.calculate.bind(this)
    this.backspace = this.backspace.bind(this)
  }

  numInput(e){
    let val = this.state.equation + e.target.value;
    this.setState({
      equation : val,
      display : val
    })
  }

  operInput(e){
    let val = this.state.equation + e.target.value;
    this.setState({
      equation :val,
      display : val
    })
  }

  calculate = () => {
    try{
      this.setState({
        display:eval(this.state.equation),
        equation:eval(this.state.equation)
     })
    }
    catch(e){
      this.setState({
        display:"Error"
      })
    }
  }

  clearInput(){
    this.setState({
      display:0,
      equation:""
    })
  }

  backspace(){
    let val = this.state.equation.slice(0,-1)
    this.setState({
      display:val,
      equation:val
    })
  }


  render(){
    return (
    <div className="Container">
      <Display equation={this.state.equation} display={this.state.display}></Display>
      <div className="grid">
      <Button id="clear" value="clear" display="AC" class="clear" click={this.clearInput}></Button>
      <Button id="backspace" value="backspace" display="CE" class="sign" click={this.backspace}></Button>
      <Button id="percent" value="%" display="%" class="percent" click={this.operInput}></Button>
      <Button id="division" value="/" display="÷" class=" oper division" click={this.operInput}></Button>
      <Button id="seven" value="7" display="7" class="num" click={this.numInput}></Button>
      <Button id="eight" value="8" display="8" class="num" click={this.numInput}></Button>
      <Button id="nine" value="9" display="9" class="num" click={this.numInput}></Button>
      <Button id="multiply" value="*" display="x" class=" oper multiply" click={this.operInput}></Button>
      <Button id="four" value="4" display="4" class="num" click={this.numInput}></Button>
      <Button id="five" value="5" display="5" class="num" click={this.numInput}></Button>
      <Button id="six" value="6" display="6" class="num" click={this.numInput}></Button>
      <Button id="subtract" value="-" display="-" class=" oper subtract" click={this.operInput}></Button>
      <Button id="one" value="1" display="1" class="num"  click={this.numInput}></Button>
      <Button id="two" value="2" display="2" class="num" click={this.numInput}></Button>
      <Button id="three" value="3" display="3" class="num"  click={this.numInput}></Button>
      <Button id="add" value="+" display="+" class="oper" click={this.operInput}></Button>
      <Button id="zero" value="0" display="0" class="row  num" click={this.numInput} ></Button>
      <Button id="decimal" value="." display="." class="num" click={this.numInput} ></Button>
      <Button id="equals" value="=" display="=" class="oper" click={this.calculate}></Button>
     </div>
    </div>
    )
  }
}


// These are the components of the app file // i could have put them in a separate file.so the props passed
// over by display and button componenst, are recievd by the Button and Display componenst mains.
// as below..
// they cant use this.state of the app.
// That is just for the components used in the App.

// We will make components for each element || Buttons and Display
const Button = (props) => <button type="button" id={props.id} value={props.value} className={props.class} onClick={props.click} >{props.display}</button>

const Display = (props) => 
  <div id="calc-display">
      <span id="eq">{props.equation}</span>
      <span id="dis">{props.display}</span>
  </div>

export default App;
