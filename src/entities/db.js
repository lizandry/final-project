import pgPromise from 'pg-promise';
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');

class SwearDatabase {
    constructor() {
        // this.db: string = db;
    }
    
getAllUsers(){
    console.log('does this work?')
    return db.any(
        `SELECT * FROM users`
        );
}


    getATeam(params) {
        console.log('does this work?')
        return db.any(
            `SELECT 
                u.id,
                u.username,
                u.email,
                u.identify_as,
                u.temp_per_swear,
                u.temp_total_swears
                FROM users u
                JOIN teams t on t.id = u.temp_team_id
            WHERE u.temp_team_id = $1`, params
            );
        }




    //doing a simple call first
// figure out what other tables i want to join later
// ,
// ut.teams,
// a.name AS author_name FROM books b 
// JOIN users_to_teams ut on u.id = ut.user_id
    // getUser(params) {
    //     console.log('does this work?')
    //     return db.any(
    //        `SELECT 
        //         u.id,
        //         u.username,
        //         u.email,
        //         u.identify_as
        //         WHERE u.id = $1
        //     `, params
        //     );
        // }

        addSwearToUser() {

        }
}


export default SwearDatabase;