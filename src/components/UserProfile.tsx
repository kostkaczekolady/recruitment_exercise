import React, {Component} from 'react';
import {User, UserRepo} from "../model/user";

class UserProfile extends Component<{ user: User, userRepo: UserRepo[] }> {

    render() {
        let items = [];
        for (let repo of this.props.userRepo) {
            items.push(<li><a href={repo.html_url}>{repo.name}</a></li>)
        }
        return (
            <div className="container-user">
                <div className="container-user-information">
                    <img
                        src={this.props.user.avatar_url}
                        alt="avatar"
                    >
                    </img>
                    <div className="container-user-description">
                        <p data-testid="name">{this.props.user.name}</p>
                        <p data-testid="bio">{this.props.user.bio}</p>
                    </div>
                </div>
                <p className="container-user-repo">Repositories:</p>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default UserProfile;
