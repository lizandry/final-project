export interface User {
    id: number;
    username: string;
    email: string;
    identify_as: string;

}

//can make custom interfaces for each situation/component i want to make db calls for!! ie: team table component referencing users, user component referencing their teams, etc.