import React from "react";

class Profile extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
         userInfo: {
          name : "name",
          login: "",
          avatar_url: "",

         },
        
        };
        console.log("ProfileClass-constructor"); //1st render
    }

    async componentDidMount(){
      // Its old uses like useEffect but it is not exactly the UseEffect
      //This method is best place to make Api Call
      console.log("ComponentDidMount ProfileClass Render"); //3rd render

      //API Calls
      const data = await fetch("https://api.github.com/users/Vishal7410")
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo: json,
      });
      //console.log("Child - componentDidMount" + this.props.userInfo.name);
    }

    componentDidUpdate() {
      console.log("Component Did Update");

    }
    componentWillUnmount(){
      console.log("Component Will Unmont");
    }

 

  render() {
    console.log("ProfileClass- render"); //2nd render
    return (
      <>
        <div
          style={{
            backgroundColor: "blueviolet",
          }}
        >
          {/* <h1>This is my class Component </h1>        
          <h2>props is Name : {this.props.name}</h2>
          <h2>Count: {this.state.count}</h2>
          <h2>Count: {this.state.count2}</h2> */}
           <h1>This is my class Component </h1>        
          <h2>GitHub Name : {this.state.userInfo.name}</h2>
          <h2>GitHub userName: {this.state.userInfo.login}</h2>
         <img src={this.state.userInfo.avatar_url} alt="" />

          {/* <button 
          onClick={()=> {
            //WE DO NOT MUTATED STATE DIRECTLY
            // NEVER DO this.state = someThing
            this.setState({
                count:this.state.count+1,
                count2: 2,
            });
          }}
          >Click me TOO</button> */}
        </div>
      </>
    );
  }
}

export default Profile;
