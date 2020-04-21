// import * as React from 'react';
import {fetchTeam } from './get-fetchers';

// export const displayUser = userId => {
//     // const e = event.target.value
//     //     if (e.length !== 0 && e !== 'filter by genre') {
        
//             fetchUser(userId)
//             .then(user => this.setState({ user }))
//         // }
// }    


//TODO
export const displayTeam = teamId => {
            fetchTeam(teamId)
            .then(team => {console.log('team', team)})
        }
// }   