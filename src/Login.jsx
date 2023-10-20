import { Button, Card, Kbd, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { myContext } from "./App";
import { useContext } from "react";
const Login = () => {
  const { SignIn, googlemama } = useContext(myContext)
  const navigate = useNavigate()
  function GetFromForm(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let error = document.getElementById("error")
    SignIn(email, password).then(() => navigate('/')).catch(err => error.textContent = err.message)
  }
  function itsgoogletime() {
    googlemama()
      .then(() => {
        navigate('/')
      })
      .catch(error => console.log(error))
  }
  return (
    <div className='flex justify-center'>
      <div className='w-1/4'>

        <Card>
          <div className='flex justify-center'>
            <Button color='gray' onClick={itsgoogletime}>
              <FcGoogle className='text-xl'> </FcGoogle>
            </Button>
          </div>
          <form className="flex flex-col gap-4" onSubmit={GetFromForm}>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email1"
                placeholder="name@flowbite.com"
                required
                type="email"
                name='email'
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password1"
                required
                type="password"
                name='password'
              />
            </div>
            <p id='error' className='text-red-500 font-semibold '></p>


            <Button type="submit" color="blue">
              Submit
            </Button>



          </form>
        </Card>
        <p className='text-center text-lg mt-4 font-semibold'> If you do not have a account please, <Link to="/register"><Kbd className='underline text-blue-500'>Register</Kbd></Link></p>
      </div>
    </div>
  );
};

export default Login;