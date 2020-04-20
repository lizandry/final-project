import pgPromise from 'pg-promise';
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');

class SwearDatabase {
    constructor() {
        // this.db: string = db;
    }

    getUser() {
        console.log('does this work?')
        return db.any(
            `SELECT 
                u.id,
                u.username,
                u.email,
                u.identify_as,
                ut.teams,
                a.name AS author_name FROM books b 
            JOIN users_to_teams ut on u.id = ut.user_id
            `
            );
        }

        addSwearToUser() {

        }
}


export default SwearDatabase;