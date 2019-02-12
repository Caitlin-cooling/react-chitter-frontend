import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { Authentication } from '../components/Authentication';
import { User } from '../components/User';
import { shallow } from 'enzyme';

describe('App', () => {
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

  it('shows user component', () => {
    expect(div).toContainReact(<User/>)
  });
});
