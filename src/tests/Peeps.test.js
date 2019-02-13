import React from 'react';
import ReactDOM from 'react-dom';
import { Peeps, ViewPeeps, PostPeep, PostPeepForm } from '../components/Peeps'
import { shallow } from 'enzyme';

describe('Peeps', () => {
  const peeps = shallow(<Peeps postPeepState={false}/>)
  const postPeeps = shallow(<Peeps postPeepState={true}/>)

  it('returns ViewPeeps component when postPeepState is false', () => {
    expect(peeps).toContainReact(<ViewPeeps/>)
  });

  it('returns PostPeep component when postPeepState is false', () => {
    expect(peeps).toContainReact(<PostPeep/>)
  });

  it('returns PostPeepForm when postPeepState is true', () => {
    expect(postPeeps).toContainReact(<PostPeepForm/>)
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
