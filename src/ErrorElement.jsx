import { useRouteError } from "react-router-dom";
import { Button } from 'flowbite-react';
const ErrorElement = () => {
    const error = useRouteError()
    console.log('error: ', error);
    return (
        <div>

            {
                error.status == 404 && <div className="flex justify-center flex-col items-center">
                    <p className="text-red-700 text-3xl font-semibold">Message:{error.error.message}</p>
                    <div ><img src="/404.jpg" alt="page not found" className="h-[90vh]" /></div> 
                    <Button
                color="blue"
                pill
            >
                <a href="/">
                    Home
                </a>
            </Button></div>
            }

        </div>
    );
};

export default ErrorElement;