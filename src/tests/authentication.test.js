import '../globals'
import App from '../components/App';
import { Authentication, SignUp, SignIn } from '../components/Authentication';
import { Greeting } from '../components/Greeting.js'
import { User } from '../components/User.js'
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
  const user = shallow(<User/>)
  const form = shallow(<SignUp/>);

  it('asks for handle and password with submit button', () => {
    expect(form).toContainReact(<input placeholer='Handle'></input>);
    expect(form).toContainReact(<input placeholer='Password' type='password'></input>);
    expect(form).toContainReact(<button>Submit</button>);
  });

  it('allows a user to enter their details, then greets them', () => {
    const handle = form.find('input').first();
    const submit = form.find('button').first();
    console.log('handle', handle)
    console.log('submit', submit)

    handle.simulate('change', {
      target: { value: 'hjvygugyyg' }
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
