import React, { Component } from "react";
class App extends Component{
    state = {users: []}
  
    componentDidMount() {
        fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

    render(){
        return(
            <div>
                <h2>Homepage rendered</h2>
                <ul>
                {this.state.users.map(user => {
                    return <li key={user.id}>{user.username}</li>
                })}
                </ul>
            </div>
           
        )
    }
}
export default App;