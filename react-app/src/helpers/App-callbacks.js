"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as React from 'react';
var get_fetchers_1 = require("./get-fetchers");
// export const displayUser = userId => {
// fetchUser(userId)
// .then(user => this.setState({ user }))
// }    
// TODO this
exports.displayTeam = function (teamId) {
    get_fetchers_1.fetchTeam(teamId)
        // .then(team => this.setState({ team }))
        .then(function (team) { return console.log('displayTeam team', team); });
};
//# sourceMappingURL=App-callbacks.js.map