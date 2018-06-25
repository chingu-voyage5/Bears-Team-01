import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/authActions';
import Modal from 'react-modal';
import InputGroup from '../common/InputGroup';
import defaultImage from '../../img/profile-default.png';

Modal.setAppElement('#root');

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      img: '',
      isEditingEmail: false,
      isEditingName: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      email: nextProps.user.email,
      name: nextProps.user.name
    });
  }
  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      img: ''
    });
  };
  handleEditClick = e => {
    this.setState({
      [e]: !this.state[e]
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const editedUser = {
      id: this.props.user.id,
      name: this.state.name,
      email: this.state.email,
      // icon:this.props.user.icon,
      isImage: false
    };
    this.props.updateUser(editedUser);
    this.setState({
      isEditingEmail: false,
      isEditingName: false
    });
  };
  handleImgSubmit = e => {
    e.preventDefault();
    const newImg = {
      id: this.props.user.id,
      icon: this.state.img,
      isImage: true
    };
    this.props.updateUser(newImg);
    this.closeModal();
  };

  render() {
    const { user } = this.props;
    let icon;
    let displayEmail;
    let displayName;
    const { email, name } = this.state;
    user.icon && user.icon.length > 0
      ? (icon = user.icon)
      : (icon = defaultImage);

    //display email
    if (this.state.isEditingEmail) {
      displayEmail = (
        <div className="user-info-item">
          <input
            onChange={this.onChange}
            value={email}
            placeholder="email"
            name="email"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => this.handleEditClick('isEditingEmail')}
          >
            save
          </button>
        </div>
      );
    } else {
      displayEmail = (
        <div className="user-info-item">
          <span>Email: {email}</span>
          <button
            type="button"
            onClick={() => this.handleEditClick('isEditingEmail')}
          >
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
            autoComplete="off"
          />
          <button
            onClick={() => this.handleEditClick('isEditingName')}
            type="button"
          >
            save
          </button>
        </div>
      );
    } else {
      displayName = (
        <div className="user-info-item">
          <span>Name: {name}</span>
          <button
            type="button"
            onClick={() => this.handleEditClick('isEditingName')}
          >
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
              <img src={icon} alt="This URL is broken, please try again." />
              <div className="user-img-overlay">
                <button onClick={this.openModal}>Change</button>
              </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <form onSubmit={this.handleImgSubmit} className="user-img-form">
                  <h3>Update your profile photo!</h3>
                  <InputGroup
                    placeholder="Image URL"
                    name="img"
                    value={this.state.img}
                    onChange={this.onChange}
                  />
                  <button type="submit">Change</button>
                </form>
              </Modal>
            </div>
          </div>
          <div className="user-info-right">
            <form onSubmit={this.handleSubmit}>
              {displayName}
              {displayEmail}
              <button type="submit" className="user-info-submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const customStyles = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    display: 'flex',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem'
  },
  overlay: {
    backgroundColor: 'rgba(76, 76, 73,0.75)'
  }
};

// const mapStateToProps = state => ({
//   auth: state.auth
// });
export default connect(
  null,
  { updateUser }
)(UserInfo);
