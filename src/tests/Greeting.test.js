import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from '../components/Greeting.js'
import { shallow } from 'enzyme';

describe('Greeting', () => {
  const greeting = shallow(<Greeting name='Caitlin'/>)

  it('Renders a greeting when given a name', () => {
    expect(greeting).toContainReact(<h1>Welcome, Caitlin</h1>)
  });
});
