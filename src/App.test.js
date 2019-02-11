import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Authentication } from './authentication';
import { shallow } from 'enzyme';

describe('homepage', () => {
  const div = shallow(<App/>)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays the title of the page', () => {
    const chitter = <h1>Chitter</h1>
    expect(div.contains(chitter)).toEqual(true);
  });

  it('shows sign up and in options', () => {
    expect(div).toContainReact(<Authentication/>)
  });
});
