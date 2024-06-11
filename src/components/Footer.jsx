import { FaFacebook } from "react-icons/fa";
import { FaInstagram,FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer  className=" bg-purple-200 p-3 py-5">
            <div className="container">
                <div className="flex justify-between">
                <div className="logo p-3 text-center">
                    <span className="text-black font-bold text-2xl">&lt;</span>
                    <span className="text-red-600 font-bold text-2xl">Router</span>
                    <span className="text-green-600 font-bold text-2xl">DOM</span>       
                    <span className="text-black font-bold text-2xl">/&gt;</span>
                    <p className="text-center m-2"> We are passionate education dedicated to <br></br> providing high-quality resources learners all backgrounds.</p>
                    <ul className="flex justify-center items-center gap-4">
                        <li> <a  className="text-2xl text-red-500 p-2" href=""><FaFacebook /></a> </li>
                        <li> <a className="text-2xl text-red-500 p-2" href=""><FaInstagram /> </a> </li>
                        <li><a  className="text-2xl text-red-500 p-2" href=""><FaYoutube /> </a> </li>
                        <li><a  className="text-2xl text-red-500 p-2" href=""><FaLinkedin /> </a> </li>
                        
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl  font-bold">Explore</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li> 
                        <li><a href="">Contact</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <div>
                
                    <h4 className="text-xl  font-bold">Newsletter</h4>
                    <p className="py-3">Subscribe Our newsletter get Update our new course </p>
                    <input className="border-2 border-green-600 rounded-full my-3 px-2 p-1 w-full" placeholder="Enter Email" type="text" />
         
                   <div>
                   <button className="px-4 w-full py-1 rounded-full bg-red-500 text-white hover:border hover:border-red-500 hover:bg-purple-200 hover:text-red-500">Subscribe</button>
                   
                   </div>
                </div>

                <div>

                </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
