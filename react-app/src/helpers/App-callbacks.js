"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as React from 'react';
var get_fetchers_1 = require("./get-fetchers");
// export const displayUser = userId => {
//     // const e = event.target.value
//     //     if (e.length !== 0 && e !== 'filter by genre') {
//             fetchUser(userId)
//             .then(user => this.setState({ user }))
//         // }
// }    
//TODO
exports.displayTeam = function (teamId) {
    get_fetchers_1.fetchTeam(teamId)
        .then(function (team) { console.log('team', team); });
};
// }   
//# sourceMappingURL=App-callbacks.js.map