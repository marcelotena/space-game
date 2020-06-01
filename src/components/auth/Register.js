import React, { useState } from 'react';
import './Register.css';
import { Checkbox } from 'semantic-ui-react'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    conditions: false
  });

  const { name, email, password1, password2, conditions } = formData;

  const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    // TODO: Register user/player function
  };

  return (
      <div className="Register">
        <h1>Register</h1>

        <div className="ui inverted segment">
          <form className="ui inverted form" onSubmit={handleSubmit}>
            <div className="two fields">
              <div className="field">
                <label>Username / Game alias*</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                    required
                />
              </div>

              <div className="field">
                <label>Email*</label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                />
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Password*</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={(e) => onChange(e)}
                    required
                />
              </div>

              <div className="field">
                <label>Confirm password*</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                    required
                />
              </div>
            </div>

            <div className="fields">
              <div className="field">
                <Checkbox
                    name="conditions"
                    value={conditions}
                    onChange={(e) => onChange(e)}
                    label="I agree to the terms and conditions"
                />
              </div>
            </div>

            <div className="fields">
              <div className="field">
                <button className="ui button primary" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>

      </div>
  );
};

export default Register;
