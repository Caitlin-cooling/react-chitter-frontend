import React from 'react';
import ReactDOM from 'react-dom';
import { ViewPeeps } from '../components/ViewPeeps'
import { shallow } from 'enzyme';

describe('ViewPeeps', () => {
  const viewPeeps = shallow(<ViewPeeps/>)

  it('Returns button to view peeps', () => {
    expect(viewPeeps).toContainReact(<button>View Peeps</button>)
  });
});
