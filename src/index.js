import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class Room extends React.Component {
    state = {
        isLit: true,
        temp : 22
   }
    
   flipLight = () => {
        this.setState({
            isLit: !this.state.isLit
        });
   };

   turnOn = () => {
       this.setState({
           isLit: !this.state.isList
       });
   }

    turnOff = () => {
        if(this.state.isLit){
            this.setState({
                isLit: !this.state.isLit
            })
        }
    }

    tempUp = () => {
        this.setState({
            temp: this.state.temp + 1
        })
    }

    tempDown = () => {
        this.setState({
            temp: this.state.temp -1
        })
    }


    render() {
       const brightness = this.state.isLit ? "lit" : "dark";
       return (
           <div className={ `room ${ brightness }` }>
               the room is {this.state.isLit ? 'lit' : 'dark' }
               <br />
               <button onClick={ this.flipLight }>Flip</button>

               <br />
                <button onClick={ this.turnOn }>Turn On</button>
                <button onClick={ this.turnOff }>Turn Off</button>

                <br />
                <br />

                the temp is { this.state.temp }c
                <br />
                <button onClick={ this.tempDown }>Temp Down</button>
                <button onClick={ this.tempUp }>Temp Up</button>
           </div>
       );
    }
}




//------------- components are stateless, use classes instead --------//
// function Room (){
//     return (
//         <div className="room">the room is lit</div>
//     );
// }

ReactDOM.render(<Room />, document.getElementById('root'));