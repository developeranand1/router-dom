const Register = () =>{
    return (
        <>
       <div className="flex justify-center items-center my-10 ">
                <div className="w-[30rem] rounded overflow-hidden shadow-lg flex flex-col px-[2.5rem] border border-purple-300">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                           Register
                        </div>

                        <div className="flex flex-col mt-3">
                            {/* <label className="font-bold w-full py-3" htmlFor="">Name</label> */}
                            <input type="text" placeholder="Enter Name" className="border border-purple-500 px-2 py-2 rounded" />
                        </div>

                        <div className="flex flex-col mt-3">
                            {/* <label className="font-bold w-full py-3" htmlFor="">Email</label> */}
                            <input type="text" placeholder="Enter Username" className="border border-purple-500 px-2 py-2 rounded" />
                        </div>
                
                        <div className="flex flex-col mt-3">
                            {/* <label className="font-bold w-full py-3" htmlFor="">Phone</label> */}
                            <input type="text" placeholder="Enter Phone" className="border border-purple-500 px-2 py-2 rounded" />
                        </div>
                        <div  className="flex flex-col mt-3">
                            {/* <label className="font-bold w-full py-3" htmlFor="">Password</label> */}
                            <input type="text" placeholder="Enter Password" className="border border-purple-500 px-2 py-2 rounded"/>
                        </div>
                        
                        <div className="my-4">
                        <button className=" w-full py-2 border rounded my-1 bg-red-500 text-white hover:border hover:border-red-500 hover:bg-purple-200 hover:text-red-500 hover:bg-white">Register</button>
                        </div>
                        <div className="text-center my-2 ">
                            <span>Do have an account ?</span> <a className="text-purple-500" href="">Login Now</a>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}


export default Register