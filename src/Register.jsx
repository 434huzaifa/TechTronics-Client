import { Button, Card, Kbd, Label, TextInput, Badge } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    return (
        <div>
            <Card>
                <form className="flex flex-col gap-4">
                <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="image"
                                value="Your profile picture url"
                            />
                        </div>
                        <TextInput
                            id="image"
                            type="url"
                        />
                    </div>
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
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password2"
                                value="Confirm Password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            required
                            type="password"
                        />
                    </div>
                    <div className='flex gap-4 justify-center items-center'>
                        <Button type="submit" color="blue">
                            Submit
                        </Button>
                        <Badge color="pink">
                            or
                        </Badge>
                        <Button color='gray'>
                            <FcGoogle className='text-2xl'> </FcGoogle>
                        </Button>
                    </div>

                </form>
            </Card>
            <p className='text-center text-lg mt-4 font-semibold'> If you have a account please, <Link to="/login"><Kbd className='underline text-blue-500'>Login</Kbd></Link></p>
        </div>
    );
};

export default Register;