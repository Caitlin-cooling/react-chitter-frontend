import React from 'react';
import ReactDOM from 'react-dom';
import { User } from '../components/User.js'
import { Greeting } from '../components/Greeting.js'
import { Authentication } from '../components/Authentication';
import { shallow } from 'enzyme';

describe('User', () => {
  it('renders Authentication when no props are given', () => {
    const user = shallow(<User/>)
    expect(user).toContainReact(<Authentication/>)
  });

  it('renders Greeting when no props are given', () => {
    const user = shallow(<User handle='Caitlin'/>)
    expect(user).toContainReact(<Greeting/>)
  });
});
