import React, {ChangeEvent, Component} from 'react';
import UserProfile from './UserProfile';
import {User, UserRepo} from '../model/user'
import {searchUser, getSortedUserRepo} from "../services/api";
import githubLogo from '../assets/logo.png'

type State = { user: User, userRepo: UserRepo[]; searchUserName: String, foundProfile: boolean };

class Search extends Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            user: new User({}),
            userRepo: [],
            searchUserName: "",
            foundProfile: false,
        }
    }

    handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState(
            {
                searchUserName: event.target.value
            }
        );
    };

    searchUsers = () => {
        if (this.state.searchUserName !== '') {
            searchUser(this.state.searchUserName).then(user=>{
                if (user === null) {
                    this.setState({foundProfile: false});
                } else {
                    this.setState({user});
                    getSortedUserRepo(this.state.searchUserName, 3).then(userRepo => {
                        this.setState({userRepo});
                        this.setState({foundProfile: true});
                    })
                }
            });
        }
    };


    render() {
        const { foundProfile } = this.state;
        return (
            <div className="layout">
                <div className="container-search">
                    <div className="container-search-logo">
                        <img src={githubLogo} alt="logo"></img>
                    </div>
                    <div className="container-search-bar">
                        <input
                            type="text"
                            name="imie"
                            placeholder="GitHub nick"
                            value={this.state.searchUserName.toString()}
                            onChange={this.handleOnChange}
                        />
                        <button onClick={this.searchUsers}>Search</button>
                    </div>
                    {
                        foundProfile &&
                        <UserProfile
                            user={this.state.user}
                            userRepo={this.state.userRepo}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Search;
