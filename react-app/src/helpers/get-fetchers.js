"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchAllUsers() {
    return fetch('/api/users', {
        headers: {
            Accept: "application/json"
        }
    }).then(function (resp) {
        if (resp.ok) {
            return resp.json();
        }
        else {
            throw new Error("oops!! fetch('/api/users') failed: Express server responded with HTTP " + resp.status + " " + resp.statusText + ".");
        }
    });
}
exports.fetchAllUsers = fetchAllUsers;
function fetchAllTeams() {
    return fetch('/api/teams', {
        headers: {
            Accept: "application/json"
        }
    }).then(function (resp) {
        if (resp.ok) {
            return resp.json();
        }
        else {
            throw new Error("oops!! fetch('/api/teams') failed: Express server responded with HTTP " + resp.status + " " + resp.statusText + ".");
        }
    });
}
exports.fetchAllTeams = fetchAllTeams;
function fetchUser(params) {
    return fetch("/api/users/" + params, {
        headers: {
            Accept: "application/json"
        },
    }).then(function (resp) {
        if (resp.ok) {
            return resp.json();
        }
        else {
            throw new Error("oops!! fetch('/api/users/" + params + "') failed: Express server responded with HTTP " + resp.status + " " + resp.statusText);
        }
    });
}
exports.fetchUser = fetchUser;
//   TODO i don't know how to do this =[
//   export function fetchUserTeams(params) {
//     return fetch(`/api/users/${params}`, {
//         headers: {
//             Accept: "application/json"
//         },
//     }).then(resp => {
//       if (resp.ok) {
//         return resp.json();
//       } else {
//         throw new Error(
//           `oops!! fetch('/api/users/${params}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
//         );
//       }
//     });
//   }
function fetchTeam(params) {
    return fetch("/api/teams/" + params, {
        headers: {
            Accept: "application/json"
        },
    }).then(function (resp) {
        if (resp.ok) {
            return resp.json();
        }
        else {
            throw new Error("oops!! fetch('/api/teams/" + params + "') failed: Express server responded with HTTP " + resp.status + " " + resp.statusText);
        }
    });
}
exports.fetchTeam = fetchTeam;
function fetchUserState(params) {
    var user = fetchUser(params);
}
exports.fetchUserState = fetchUserState;
//# sourceMappingURL=get-fetchers.js.map