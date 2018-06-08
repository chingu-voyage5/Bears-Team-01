import React, { Component } from 'react';
import Modal from 'react-modal';
import InputGroup from '../common/InputGroup';

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
  openModal() {
    this.setState({ modalIsOpen: true });
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

  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={this.openModal}>
          Sign In
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="login">
            <h1 className="display-4 text-center">Sign In</h1>

            <InputGroup
              placeholder="e-mail"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <InputGroup
              placeholder="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <div className="form-group">
              <button className="btn btn-info" type="submit">
                Sign In!
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Login;
