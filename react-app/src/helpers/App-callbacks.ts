// import * as React from 'react';
import {fetchTeam } from './get-fetchers';

// export const displayUser = userId => {
        
    // fetchUser(userId)
    // .then(user => this.setState({ user }))
// }    


// TODO this
export const displayTeam = teamId => {
    fetchTeam(teamId)
    // .then(team => this.setState({ team }))
    .then(team => console.log('displayTeam team', team))
}   