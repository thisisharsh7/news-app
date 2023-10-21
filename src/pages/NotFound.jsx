import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-screen text-center tex-black">
            <a href="https://storyset.com/web" className="sm:w-80 max-w-60">
                <img src="/assets/404.png" className="w-full" alt="" />
            </a>
            <p className="font-bold"> Return to <Link to="/" className="underline text-blue-500">Home</Link></p>
        </div>
    )
}

export default NotFound