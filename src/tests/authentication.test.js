import '../globals'
import App from '../components/App';
import { Authentication, SignUp, SignIn } from '../components/Authentication';
import { Greeting } from '../components/Greeting.js'
import { User } from '../components/User.js'
import { shallow } from 'enzyme';

describe('Authentication', () => {
  const form = shallow(<Authentication/>);

  it('renders sign up and sign in forms', () => {
    expect(form).toContainReact(<SignUp/>);
    expect(form).toContainReact(<SignIn/>);
  });
});

describe('SignUp', () => {
  const user = shallow(<User/>)
  const form = shallow(<SignUp/>);

  it('asks for handle and password with submit button', () => {
    expect(form).toContainReact(<input placeholer='Handle'></input>);
    expect(form).toContainReact(<input placeholer='Password' type='password'></input>);
    expect(form).toContainReact(<button>Submit</button>);
  });

  it('allows a user to enter their details, then greets them', () => {
    const handle = form.find('input').first();
    const password = form.find('input').last();
    const submit = form.find('button').first();

    handle.simulate('change', {
      target: { value: 'fgfdggdfg' }
    });
    password.simulate('change', {
      target: { value: 'caitlin' }
    });
    submit.simulate('click');
    expect(user).toContainReact(<Greeting/>)
  });
});

describe('SignIn', () => {
  it('asks for handle and password with submit button', () => {
    const form = shallow(<SignIn/>)
    expect(form).toContainReact(<input placeholer='Handle'></input>);
    expect(form).toContainReact(<input placeholer='Password' type='password'></input>);
    expect(form).toContainReact(<button>Submit</button>);
  });
});
