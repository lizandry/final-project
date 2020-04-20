import pgPromise from 'pg-promise';
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');

class SwearDatabase {
    constructor() {
        // this.db: string = db;
    }

    getAllUsers() {
        console.log('does this work?')
        return db.any(
            `SELECT 
                u.id,
                u.username,
                u.email,
                u.identify_as
                FROM users u
            `
            );
        }

    //doing a simple call first
// figure out what other tables i want to join later
// ,
// ut.teams,
// a.name AS author_name FROM books b 
// JOIN users_to_teams ut on u.id = ut.user_id
    getUser(params: number) {
        console.log('does this work?')
        return db.any(
            `SELECT 
                u.id,
                u.username,
                u.email,
                u.identify_as
                WHERE u.id = $1
            `, params
            );
        }

        addSwearToUser() {

        }
}


export default SwearDatabase;