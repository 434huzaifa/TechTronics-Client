import { Button, Card, Kbd, Label, TextInput, } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { myContext } from "./App";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
const Register = () => {
    const { signUpUser, googlemama,dark } = useContext(myContext)
    const navigate = useNavigate()
    function GetUserAndCreate(e) {
        e.preventDefault();
        let error = document.getElementById("error")
        error.textContent=""
        let name = e.target.name.value;
        console.log('name: ', name);
        let email = e.target.email.value;
        console.log('email: ', email);
        let image = e.target.image.value;
        console.log('image: ', image);
        let password1 = e.target.password1.value;
        console.log('password1: ', password1);
        let password2 = e.target.password2.value;
        console.log('password2: ', password2);

        if (password1 == password2) {
            if (toString(password1).length >= 6) {
                if (/[A-Z]/.test(password1)) {
                    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password1)) {
                        signUpUser(email, password1)
                            .then(res => {
                                updateProfile(res.user, {
                                    displayName: name,
                                    photoURL: image
                                }).then(res => {
                                    console.log(res.user)

                                }).catch(err => {
                                    error.textContent=err.message
                                })

                                Swal.fire({ icon: 'success', title: "Account Successfully Created" }
                                ).then(() => {
                                    navigate('/login')
                                })
                            }
                            )
                            .catch(err => {
                                error.textContent=err.message
                            })
                    } else {
                        error.textContent = "Password don't have a special character"
                    }
                } else {
                    error.textContent = "Password don't have a capital letter"
                }
            } else {
                error.textContent = 'Password Less than 6 characters'
            }
        } else {
            error.textContent = 'Password Did Not Match'

        }

    }
    function itsgoogletime() {
        googlemama()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='flex justify-center mb-10'> 
            <div className='w-96'>
                <Card className={`${dark && "bg-slate-900 border-0"}`}>
                    <form className="flex flex-col gap-4" onSubmit={GetUserAndCreate}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Your name"
                                    className={`${dark?"text-white": "text-gray-900"}`}
                                />
                            </div>
                            <TextInput
                                id="name"
                                required
                                type="text"
                                name="name"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="image"
                                    value="Your profile picture url"
                                    className={`${dark?"text-white": "text-gray-900"}`}
                                />
                            </div>
                            <TextInput
                                id="image"
                                type="url"
                                name="image"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                    className={`${dark?"text-white": "text-gray-900"}`}
                                />
                            </div>
                            <TextInput
                                id="email1"
                                placeholder="name@flowbite.com"
                                required
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                    className={`${dark?"text-white": "text-gray-900"}`}
                                />
                            </div>
                            <TextInput
                                id="password1"
                                required
                                type="password"
                                name="password1"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password2"
                                    value="Confirm Password"
                                    className={`${dark?"text-white": "text-gray-900"}`}
                                />
                            </div>
                            <TextInput
                                id="password2"
                                required
                                type="password"
                                name="password2"
                            />
                        </div>
                        <p id='error' className='text-red-500 font-semibold '></p>
                        <div className='flex gap-4 justify-center items-center'>
                            <Button type="submit" color="blue">
                                Submit
                            </Button>
                            <Button color='gray' onClick={itsgoogletime}>
                                <FcGoogle className='text-xl'> </FcGoogle>
                            </Button>
                        </div>

                    </form>
                </Card>
                <p className='text-center text-lg mt-4 font-semibold'> If you have a account please, <Link to="/login"><Kbd className='underline text-blue-500'>Login</Kbd></Link></p>
            </div>
        </div>
    );
};

export default Register;