import * as React from 'react';
import TeamDash from './Components/TeamDash'
import { fetchAllUsers, fetchAllTeams } from './helpers/get-fetchers';
import { displayTeam } from './helpers/App-callbacks';
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            users: Array,
            teams: Array,
            team: Array
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
// const friendship: string = 'friendship';
// console.log(this.state)
        return (
            <div className='App'>
                <TeamDash
                    action={displayTeam}
                
                />
            </div>
        )
    }
}
export default App;