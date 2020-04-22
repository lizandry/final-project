import * as React from 'react';
import TeamDash from './Components/TeamDash'
import { fetchAllUsers, fetchAllTeams} from './helpers/get-fetchers';
import { displayTeam } from './helpers/App-callbacks';
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            users: Array,
            teams: Array,
            // user: 1,
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


        // fetchTeam(this.state.user)
        // .then(team => this.setState({ team }))
    }
    // displayTeam = teamId => {
    //     fetchTeam(teamId)
    //         .then(team => this.setState({ team }))
            // .then(team => console.log('display team', team))
    // }
    
    render() {
// const friendship: string = 'friendship';
// console.log(this.state)

        return (
            <div className='App'>
                {/* {console.log('state check!!', this.state)} */}
                <TeamDash
                    action={displayTeam}
                
                />
            </div>
        )
    }
}
export default App;