const pgPromise = require('pg-promise');
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');

class SwearDatabase {
    constructor() {
        // this.db: string = db;
    }
    
getAllUsers(){
    return db.any(
        `SELECT * FROM users`
        );
}
getAllTeams(){
    return db.any(
        `SELECT * FROM teams`
        );
}


// TODO can i make some of these calls less ugly?
getUser(params) {
    return db.any(
        `SELECT 
        u.id,
        u.username,
        u.email,
        u.identify_as,
        u.temp_total_swears,
        ut.team_id,
        ut.per_swear
        from users u
        JOIN users_to_teams ut
        ON u.id = ut.user_id
        JOIN teams t
        ON ut.team_id = t.id
        WHERE u.id = 1
        `
        );
    }
    
    // TODO get id and pass it in as params
    // TODO user_id in swears table probably isn't necessary
getTeam(params) {
    return db.any(
        `SELECT 
        u.id,
        u.username,
        u.email,
        u.identify_as,
        u.temp_total_swears,
        ut.team_id,
        ut.per_swear
        from users u
        JOIN users_to_teams ut
        ON u.id = ut.user_id
        JOIN teams t
        ON ut.team_id = t.id
        WHERE ut.team_id = 1
        `
        );
    }
    // TODO this should be a call for a separate component
        // t.id, 
        // t.swear,
        // t.team_name,
        // t.pledge_url,
        // t.owner,
        // t.end_date,
    // JOIN swears s
    // ON u.id = s.user_id
            
            

        addSwearToUser() {

        }
}

module.exports = SwearDatabase;