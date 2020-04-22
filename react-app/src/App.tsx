import * as React from 'react';
import TeamTable from './Components/TeamTable'
import { fetchAllUsers, fetchAllTeams, fetchUserTeams} from './helpers/get-fetchers';
import { displayTeam } from './helpers/App-callbacks';

interface IProps {
}

interface IState {
  user: object;
  teams: any[];
  userTeams: number[];
}



class App extends React.Component {
    //TODO change structure, so state is 'user' and teams is their teams
    constructor(props: object) {
        super(props);
        this.state = {
            user: {},
            teams: [],
            userTeams: [],
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
// const setTeams = this.state.user.id => {}

        return (
            <div className='App'>
                {/* {(this.state.user.id=>)=>} */}
                {/* {console.log('state check!!', this.state)} */}
                <TeamTable
                    action={displayTeam}
                
                />
            </div>
        )
    }
}
export default App;