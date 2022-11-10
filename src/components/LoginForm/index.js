// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
  }

  onPaswordChange = event => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = () => {}

  verifyUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    const errMsg = data.error_msg
    console.log(errMsg)
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onFailureLogin()
      this.setState({errMsg: `*${errMsg}`})
    }
  }

  render() {
    const {username, password, errMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="left-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <div className="right-container">
          <div className="login-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="web-logo"
            />
            <form className="form-container" onSubmit={this.verifyUserDetails}>
              <label htmlFor="usernameid">USERNAME</label>
              <input
                type="text"
                id="usernameid"
                className="input-element"
                placeholder="Username"
                onChange={this.onUsernameChange}
                value={username}
              />
              <label htmlFor="passwordid">PASSWORD</label>
              <input
                type="password"
                id="passwordid"
                className="input-element"
                placeholder="Password"
                value={password}
                onChange={this.onPaswordChange}
              />

              <button type="submit" className="btn">
                Login
              </button>
              <p id="warning">{errMsg} </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
