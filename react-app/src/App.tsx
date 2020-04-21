import * as React from 'react';
import { fetchAllUsers, fetchAllTeams, fetchUser, fetchTeam } from './api-helpers/get-fetchers';
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            users: Array,
        };
    }

    // componentDidMount() {
    //     fetchAllUsers()
    //     .then(users => this.setState({ users }))
    // }

    componentDidMount() {
        this.callApi()
        //   .then(res => this.setState({ response: res.express }))
        .then(users => this.setState({ users }))
          .catch(err => console.log(err));
      }
      
      callApi = async () => {
        const response = await fetch('/api/users');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };

    render() {
const friendship: string = 'friendship';

        return (
            <div className='App'>
                {console.log('state check!', this.state)}
                hello world!!
            </div>
        )
    }
}
export default App;