import React, { useState } from 'react';
import './css/Login.css'
import { Link, useHistory } from "react-router-dom";
// import StorefrontIcon from '@material-ui/icons/Storefront';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 

  return (
    <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login_logo">
                    {/* <StorefrontIcon className="login__logoImage" fontSize="large" /> */}
                    <h2 className="login_logoTitle">eSHOP</h2>
                </div>
            </Link>
    <div className='login_container'>
    <h1>Sign-in</h1>

    {/* <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

        <h5>Password</h5>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

        <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
    </form> */}

    <p>
        By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
    </p>

    {/* <button className='login_registerButton' onClick={register}>Create your eShop Account</button> */}
</div>
</div>
  )
}

export default Login