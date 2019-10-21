import React from 'react';
import ReactDOM, {render, unmountComponentAtNode} from 'react-dom';
import App from '../App';
import {act} from "react-dom/test-utils";
import UserProfile from "../components/UserProfile";
import {User} from "../model/user";
import Search from "../components/Search"
import { shallow } from 'enzyme';


let container: any = null;
beforeEach(() => {
    //element DOM jako cel renderowania
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('includes Search', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<Search />)).toEqual(true)
});

it('shows user data', () => {
    let user = new User({
        name: "testowy",
        bio:  "biotest",
    });
    act(() => {
        render(<UserProfile user={user}/>, container);
    });
    expect(
        container.querySelector("[data-testid='name']").innerHTML
    ).toEqual(user.name);
    expect(
        container.querySelector("[data-testid='bio']").innerHTML
    ).toEqual(user.bio);
});
