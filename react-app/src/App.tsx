import * as React from 'react';
import { fetchAllUsers, fetchAllTeams } from './api-helpers/get-fetchers';
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            users: Array,
            teams: Array
        };
    }

    componentDidMount() {
        fetchAllUsers()
            .then(users => this.setState({ users }))
            .catch(err => console.log(err));
        fetchAllTeams()
            .then(teams => this.setState({ teams }))
            .catch(err => console.log(err));
    }

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