import {User, UserRepo} from '../model/user';

const gitHubUrl = 'https://api.github.com/users';

export async function searchUser(name: String): Promise<User | null> {
    const response = await fetch(`${gitHubUrl}/${name}`);
    if (response.status === 200) {
        return new User(await response.json());
    }
    return null;
}

export async function searchUserRepo(name: String): Promise<UserRepo[]> {
    const response = await fetch(`${gitHubUrl}/${name}/repos`);
    const json = await response.json();
    if (response.status === 200) {
        let reposArray = [];
        for (let repoData of json) {
            reposArray.push(new UserRepo(repoData))
        }
        return reposArray;
    }
    return [];
}


export async function getSortedUserRepo(name: String, limit: number): Promise<UserRepo[]> {

    const repos = await searchUserRepo(name);

    repos.sort((a, b) => {
        return b.stars - a.stars
    });
    return repos.slice(0, limit);

}
