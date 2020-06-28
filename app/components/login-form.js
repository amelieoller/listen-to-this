import Component from '@glimmer/component';

export default class LoginFormComponent extends Component {
  userId = null;

  loginUser(username) {
    console.log('username', username);
  }

  onLoginFormSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const username = target.querySelector('#username').value;

    this.loginUser(username);
  };
}
