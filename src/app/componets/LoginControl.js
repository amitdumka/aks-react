import React from "react";

function LoginButton(props) {
  return <button className={"btn btn-outline-"+props.className} onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button className={"btn btn-outline-"+props.className} onClick={props.onClick}>Logout</button>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting className={"text-"+props.className}/>;
  }
  return <GuestGreeting className={"text-"+props.className}/>;
}
function UserGreeting(props) {
  return <h1  className={props.className}>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1 className={props.className}>Please sign up.</h1>;
}
export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton  className={this.props.className} onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton className={this.props.className} onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting className={this.props.className} isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
