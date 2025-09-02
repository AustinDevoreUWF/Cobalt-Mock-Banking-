
export default function SignPage(){

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A2F40]">
            
            <div className="relative flex flex-col items-centered">{/*Here we wrap h1 and shape to stick tg*/}
            <h1 className="font-inter text-5xl font-bold">Cobalt</h1>
                    <div className=
                    "w-118 h-125 bg-white flex justify-start p-5 py-10" /*Here we align everything to the left and add a padding to each item */
                    style={{
                        clipPath:"polygon(0% 7%, 100% 0%, 100% 85%, 0% 90%)"
                    }}
                    >
<div className="flex flex-col py-8 px-3 gap-5">
    <span className="text-black font-inter text-5xl font-thin">Sign In</span>
    <div>
        <label htmlFor="email" className="block text-gray-900 text-xs italic px">Email Address</label>
        <input type="email"placeholder="Email"className="text-black border border-gray-400 rounded-sm text-sm w-80 h-7"/>
    </div>
    <div>
        <label htmlFor="password" className="block text-gray-900 text-xs italic px">Password</label>
        <input type="password"placeholder="Password"className="text-black border border-gray-400 rounded-sm text-sm w-80 h-7"/>
    </div>
    <div>
        <input type="checkbox" id="remember" className="border-black" />
        <label htmlFor="checkbox" className="px-2 text-black text-xs">Remember Me?</label>
    </div>
    <div>
        <button type="submit" className=" w-20 bg-[#0A2F40] text-white text-sm font-semibold py-2 rounded hover:bg-blue-900 transition-colors">Sign in</button>
    </div>
</div>
                    </div>
                </div>

            </div>
    );
}