import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth,createUserProfileDoc } from '../../firebase/firebase.utils';
import './signUp.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault() // prevent reload page after submit
        const {displayName,email,password,confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert ('password do not match')
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDoc(user,{displayName});

            //clear state after that
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',    
            })
        }
        catch(error){
            console.log(error)
        }
    }

    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label="Display Name" required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label="email" required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label="password" required/>
                    <FormInput type='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label="confirmPassword" required/>
                    
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;