import React, { Component } from 'react';
import { connect } from 'react-redux';
import defaultImage from '../../img/profile-default.png';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      url: '',
      isEditingEmail: false,
      isEditingName: false
    };
  }
  handleEditClick = e => {
    this.setState({
      [e]: true
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    this.setState({ [e]: false });
  };

  render() {
    const { user } = this.props.auth;
    let icon;
    let displayEmail;
    let displayName;
    const { email, name, url } = this.state;
    user.icon ? (icon = user.icon) : (icon = defaultImage);

    //display email
    if (this.state.isEditingEmail) {
      displayEmail = (
        <div className="user-info-item">
          <form>
            <input
              onChange={this.onChange}
              value={email}
              placeholder="email"
              name="email"
            />
            <button
              type="button"
              onClick={() => this.handleSubmit('isEditingEmail')}
            >
              save
            </button>
          </form>
        </div>
      );
    } else {
      displayEmail = (
        <div className="user-info-item">
          <span>Email: {user.email}</span>
          <button onClick={() => this.handleEditClick('isEditingEmail')}>
            edit
          </button>
        </div>
      );
    }

    //display name
    if (this.state.isEditingName) {
      displayName = (
        <div className="user-info-item">
          <input
            onChange={this.onChange}
            value={name}
            placeholder="name"
            name="name"
          />
          <button
            onClick={() => this.handleSubmit('isEditingName')}
            type="button"
          >
            save
          </button>
        </div>
      );
    } else {
      displayName = (
        <div className="user-info-item">
          <span>Name: {user.name}</span>
          <button onClick={() => this.handleEditClick('isEditingName')}>
            edit
          </button>
        </div>
      );
    }

    return (
      <div className="userInfo">
        <div className="user-info-title">
          <h3>Contact Information</h3>
        </div>
        <div className="user-info-container">
          <div className="user-info-left">
            <div className="user-photo">
              <img src={icon} />
            </div>
          </div>
          <div className="user-info-right">
            {displayName}
            {displayEmail}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(UserInfo);
