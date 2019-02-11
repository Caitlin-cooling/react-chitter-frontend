import React from 'react';
import ReactDOM from 'react-dom';
import { Authentication, SignUp } from './authentication';
import { shallow } from 'enzyme';

describe('Authentication', () => {
  it('renders a sign up form', () => {
    const form = shallow(<Authentication/>);
    expect(form).toContainReact(<SignUp/>);
  });

  it('asks for handle and password with submit button', () => {
    const form = shallow(<SignUp/>);
    expect(form).toContainReact(<input placeholer='Handle'></input>);
    expect(form).toContainReact(<input placeholer='Password'></input>);
    expect(form).toContainReact(<button>Submit</button>);
  });
});
