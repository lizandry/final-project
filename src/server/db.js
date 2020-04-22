const pgPromise = require('pg-promise');
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');

class SwearDatabase {
    constructor() {
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


    // REFACTOR can i make some of these calls less ugly?
// REFACTOR take the 1 back out of this
// TODO if the user is on multiple teams, the commented-out code creates dupes
    getUser(params) {

        return db.any(
            // `SELECT 
            //     u.id,
            //     u.username,
            //     u.email,
            //     u.identify_as,
            //     u.temp_total_swears,
            //     ut.team_id,
            //     ut.per_swear
            //     FROM users u
            //     JOIN users_to_teams ut
            //     ON u.id = ut.user_id
            //     JOIN teams t
            //     ON ut.team_id = t.id
            //     WHERE u.id = $1
            // `, params

            `SELECT * FROM users u 
            WHERE u.id = $1`, 
            params
        );
    }

    getUserTeams(params) {
        `SELECT
            ut.team_id,
            ut.per_swear
        FROM users_to_teams ut
        JOIN users u
        ON ut.user_id = u.id
        WHERE ut.user_id = $1
        `, params
    }
    
        // REFACTOR user_id in swears table probably isn't necessary
        // this one is basically done!!
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
                WHERE ut.team_id = $1
            `, params
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

userCreate() {


}
userDelete() {

}

userLogin(email, password, callback) {

}
userLogout() {

}


}

function login(email, password, callback) {
    //this example uses the "pg" library
    //more info here: https://github.com/brianc/node-postgres
  
    const bcrypt = require('bcrypt');
    const postgres = require('pg');
  
    const conString = 'postgres://user:pass@localhost/mydb';
    postgres.connect(conString, function (err, client, done) {
      if (err) return callback(err);
  
      const query = 'SELECT id, nickname, email, password FROM users WHERE email = $1';
      client.query(query, [email], function (err, result) {
        // NOTE: always call `done()` here to close
        // the connection to the database
        done();
  
        if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));
  
        const user = result.rows[0];
  
        bcrypt.compare(password, user.password, function (err, isValid) {
          if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));
  
          return callback(null, {
            user_id: user.id,
            nickname: user.nickname,
            email: user.email
          });
        });
      });
    });
  }
  

module.exports = SwearDatabase;