import React from 'react';
import ReactDOM from 'react-dom';
import { Peeps, ViewPeeps } from '../components/Peeps'
import { shallow } from 'enzyme';

describe('Peeps', () => {
  const peeps = shallow(<Peeps/>)

  it('returns ViewPeeps component', () => {
    expect(peeps).toContainReact(<ViewPeeps/>)
  });

});

describe('ViewPeeps', () => {
  const viewPeeps = shallow(<ViewPeeps/>)

  it('returns button to view peeps', () => {
    expect(viewPeeps).toContainReact(<button>View Peeps</button>)
  });
});

});
