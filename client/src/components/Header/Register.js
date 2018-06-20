import React, { Component } from 'react';
import Modal from 'react-modal';
import InputGroup from '../common/InputGroup';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {},
      registered: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.errors);
    this.setState({ errors: nextProps.errors });
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
      name: '',
      password: '',
      password2: '',
      errors: {}
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register loggedIn">
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="login-form" onSubmit={this.onSubmit}>
            <h1>Sign Up</h1>
            <InputGroup
              placeholder="e-mail"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              errors={errors.email}
            />
            <InputGroup
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              errors={errors.name}
            />
            <InputGroup
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              errors={errors.password}
            />
            <InputGroup
              placeholder="confirm password"
              type="password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
              errors={errors.password2}
            />
            <div className="auth-submit-container">
              <button className="auth-submit-button" type="submit">
                Register!
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
  { registerUser }
)(Register);
