import {Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <>
            <div className=" bg-purple-200">
            <nav className='container flex justify-between items-center w-full'>
                <div className="logo p-3">
                    <span className="text-black font-bold text-2xl">&lt;</span>
                    <span className="text-red-600 font-bold text-2xl">Router</span>
                    <span className="text-green-600 font-bold text-2xl">DOM</span>       
                    <span className="text-black font-bold text-2xl">/&gt;</span>
                </div>
                <ul className="flex justify-between items-center gap-14 p-3">
                    <li className="gap-8"> <Link to='/' className="text-xl hover:font-bold" href="">Home</ Link ></li>
                    <li className="gap-8"> <Link to='about' className="text-xl hover:font-bold" href="">About</ Link ></li>
                    <li className="gap-8"> < Link to='contact' className="text-xl hover:font-bold" href="">Contact</ Link ></li>
                </ul>
                <div className="flex justify-between items-center gap-3 p-3">
                    <button className="border border-red-500 px-4 py-1 text-red-600 text-xl rounded hover:bg-red-500  hover:text-white"><Link to='login'>Login</Link></button>
                    <button className="px-4 py-1 text-xl rounded bg-red-500 text-white hover:border hover:border-red-500 hover:bg-purple-200 hover:text-red-500 border"><Link to='register'>Register</Link></button>
                </div>
            </nav>
            </div>
        </>
    );
}

export default Navbar;
