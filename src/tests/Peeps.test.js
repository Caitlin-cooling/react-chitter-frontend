import React from 'react';
import ReactDOM from 'react-dom';
import { Peeps, ViewPeeps, PostPeep, PostPeepForm , ShowPeeps} from '../components/Peeps'
import { shallow } from 'enzyme';

describe('Peeps', () => {
  const peeps = shallow(<Peeps postPeepState={false}/>)
  const postPeeps = shallow(<Peeps postPeepState={true}/>)
  const showPeeps = shallow(<Peeps peeps='this is a peep'/>)

  it('returns ViewPeeps component when postPeepState is false', () => {
    expect(peeps).toContainReact(<ViewPeeps/>)
  });

  it('returns PostPeep component when postPeepState is false', () => {
    expect(peeps).toContainReact(<PostPeep/>)
  });

  it('returns PostPeepForm when postPeepState is true', () => {
    expect(postPeeps).toContainReact(<PostPeepForm/>)
  });

  it('returns peeps when peeps is not null', () => {
    expect(showPeeps).toContainReact(<ShowPeeps/>)
  });
});

describe('ViewPeeps', () => {
  const viewPeeps = shallow(<ViewPeeps/>)

  it('returns button to view peeps', () => {
    expect(viewPeeps).toContainReact(<button>View Peeps</button>)
  });
});

describe('PostPeep', () => {
  const postPeep = shallow(<PostPeep/>)

  it('returns button to post peep', () => {
    expect(postPeep).toContainReact(<button>Post Peep</button>)
  });
});

describe('PostPeepForm', () => {
  const form = shallow(<PostPeepForm/>)

  it('returns a form to fill in to create peep', () => {
    expect(form).toContainReact(<textarea placeholer='What would you like to say?'></textarea>)
  });
});

describe('ShowPeeps', () => {
  const showPeeps = shallow(<ShowPeeps peeps='hi there'/>)

  it('returns a list of peeps', () => {
    expect(showPeeps).toContainReact(<ul><li>hi there</li></ul>)
  });
});
