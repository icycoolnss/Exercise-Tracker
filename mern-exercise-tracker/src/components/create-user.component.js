import { Component } from "react";
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          username: ''
        };
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
          username: this.state.username,
        };
        console.log(newUser);
        
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
        
        this.setState({
          username: ''
        })
    }
    
    render() {
        return(
            <div >
                
                <h3 class="text-center">Create New User</h3>
                
                <div class=" d-flex justify-content-center">
                
                <form onSubmit={this.onSubmit}>
    
                     
                    
                    <label>Username: </label>
                    <input  
                        type="text"
                        required
                        className="form-control "
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />

                    <br></br>
                    <div class="form-group d-flex justify-content-center">
                    <input type="submit" value="Create User" className="btn btn-primary " />
                    </div>
                </form>

                </div>
                </div>
            
        )
    }
}