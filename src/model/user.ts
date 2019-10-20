export class User {
    name: string;
    bio: string;
    avatar_url: string;

    constructor(object: any) {
        this.name = object.hasOwnProperty('name') ? object.name : "";
        this.bio = object.hasOwnProperty('bio') ? object.bio : "";
        this.avatar_url = object.hasOwnProperty('avatar_url') ? object.avatar_url : "";
    }
}

export class UserRepo {
    name: string;
    stars: number;
    html_url: string;

    constructor(object: any) {
        this.name = object.hasOwnProperty('name') ? object.name : "";
        this.html_url = object.hasOwnProperty('html_url') ? object.html_url : "";
        this.stars = object.hasOwnProperty('stargazers_count') ? object.stargazers_count : "";
    }
}
