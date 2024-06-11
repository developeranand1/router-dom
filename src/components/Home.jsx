const Home = () => {
    return (
        <>
           

            <div className="container px-20 mx-auto">
                <div className="grid grid-rows-1  grid-flow-col gap-8">
                    <div className="mx-auto py-20">
                        <p className="font-bold">Gateway to Lifelong Learning</p>
                        <h1 className="font-bold text-4xl  py-3">Unlock Your Potential
                        with Online Learning</h1>
                        <p className="text-xl py-3">Discover a world of knowledge and opportunities with our online education platform pursue a new career</p>

                        <button className="px-5 py-3 my-3 text-xl border  rounded bg-red-500 text-white hover:border hover:border-red-500 hover:bg-purple-200 hover:text-red-500 hover:bg-white">Get Started</button>
                    </div>
                    <div>
                        <img className="w-full h-full" src="imgs/01.png" alt="img" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
