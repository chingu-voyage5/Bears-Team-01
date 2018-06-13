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
      errors: {}
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
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
    return (
      <div>
        <button className="btn btn-info" onClick={this.openModal}>
          Sign Up
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="register" onSubmit={this.onSubmit}>
            <h1 className="display-4 text-center">Sign Up</h1>
            <InputGroup
              placeholder="e-mail"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <InputGroup
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <InputGroup
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <InputGroup
              placeholder="confirm password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            <div className="form-group">
              <button className="btn btn-info" type="submit">
                Register!
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(Register);
