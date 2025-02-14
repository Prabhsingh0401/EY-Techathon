function AuthModal(){
    return(
        <div className="w-screen h-screen absolute top-0 left-0 z-20 flex">
            <div className="border border-gray-700 w-full bg-[#030303] text-rgb(215, 218, 220) p-5 mx-4 align-middle flex self-center">
             <h1>Login</h1>
             <input type="text"/>
             <input type="password"/>
            </div>
        </div>
    )
}
export default AuthModal