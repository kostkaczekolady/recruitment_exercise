import React, {Component} from 'react';
import {User, UserRepo} from "../model/user";

class UserProfile extends Component<{ user: User, userRepo: UserRepo[] }> {

    render() {
        return (
            <section className="container-user">
                <div className="container-user-information">
                    <img
                        data-testid="avatar_url"
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
                    {
                        this.props.userRepo.map((repo, index) => (
                            <li data-testid="html_url" key={index}>
                                <a href={repo.html_url}>
                                    {repo.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
        )
    }
}

export default UserProfile;
