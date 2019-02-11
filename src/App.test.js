import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('homepage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays the title of the page', () => {
    const div = shallow(<App/>)
    const chitter = <h1>Chitter</h1>
    expect(div.contains(chitter)).toEqual(true);
  });
});
