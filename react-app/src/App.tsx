import * as React from 'react';
import { fetchAllUsers } from './api-helpers/get-fetchers';
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            users: Array,
        };
    }

    componentDidMount() {
        fetchAllUsers()
        .then(users => this.setState({ users }))
    }

    render() {
const friendship: string = 'friendship';

        return (
            <div className='App'>
                hello world!!
            </div>
        )
    }
}
export default App;