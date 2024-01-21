import React from "react";

class Profile extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
         count: 0,
         count2: 0
        };
    }

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "blueviolet",
          }}
        >
          <h1>This is my class Component </h1>        
          <h2>props is Name : {this.props.name}</h2>
          <h2>Count: {this.state.count}</h2>
          <h2>Count: {this.state.count2}</h2>

          <button 
          onClick={()=> {
            //WE DO NOT MUTATED STATE DIRECTLY
            // NEVER DO this.state = someThing
            this.setState({
                count:this.state.count+1,
                count2: 2,
            });
          }}
          >Click me TOO</button>
        </div>
      </>
    );
  }
}

export default Profile;
