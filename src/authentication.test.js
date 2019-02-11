import React from 'react';
import ReactDOM from 'react-dom';
import { Authentication, SignUp, SignIn } from './authentication';
import { shallow } from 'enzyme';

describe('Authentication', () => {
  const form = shallow(<Authentication/>);

  it('renders a sign up form', () => {
    expect(form).toContainReact(<SignUp/>);
  });

  it('renders a sign in form', () => {
    expect(form).toContainReact(<SignIn/>);
  });
});

describe('SignUp', () => {
  it('asks for handle and password with submit button', () => {
    const form = shallow(<SignUp/>);
    expect(form).toContainReact(<input placeholer='Handle'></input>);
    expect(form).toContainReact(<input placeholer='Password'></input>);
    expect(form).toContainReact(<button>Submit</button>);
  });
});

describe('SignIn', () => {
  it('asks for handle and password with submit button', () => {
    const form = shallow(<SignIn/>)
    expect(form).toContainReact(<input placeholer='Handle'></input>);
    expect(form).toContainReact(<input placeholer='Password'></input>);
    expect(form).toContainReact(<button>Submit</button>);
  });
});
