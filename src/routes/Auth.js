import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      const auth = getAuth();
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email.password);
      } else {
        data = await signInWithEmailAndPassword(auth, email.password);
      }
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name='email'
          type='text'
          placeholder='Email'
          required
          value={email}
        />
        <input
          onChange={onChange}
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password}
        />
        <input type='submit' value={newAccount ? 'Create Account' : 'Log In'} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
      </div>
    </div>
  );
};
export default Auth;
