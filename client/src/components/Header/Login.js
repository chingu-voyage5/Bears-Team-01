import React, { Component } from 'react';
import Modal from 'react-modal';
import InputGroup from '../common/InputGroup';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
const customStyles = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
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

Modal.setAppElement('#root');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      email: '',
      password: '',
      errors: {}
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
      errors: {}
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false,
      email: '',
      password: '',
      errors: {}
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();
    const currentUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(currentUser);
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="login loggedIn">
        <button onClick={this.openModal}>Sign In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="login-form" onSubmit={this.onSubmit}>
            <h1>Sign In</h1>

            <InputGroup
              placeholder="e-mail"
              name="email"
              value={email}
              onChange={this.onChange}
              errors={errors.email}
            />
            <InputGroup
              placeholder="password"
              name="password"
              type="password"
              value={password}
              onChange={this.onChange}
              errors={errors.password}
            />
            <div className="auth-submit-container">
              <button className="auth-submit-button" type="submit">
                Sign In!
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
