
function Login() {
  return (
    <>
      <div className="bloc1 md:mx-96 mx-80 md:px-16 px-14 md:h-full h-full rounded-xl bg-white md:my-60 my-56 shadow-md md:py-14 py-12">
        <div>
          <h1 className=" text-slate-500 md:text-3xl text-2xl md:mb-14 mb-11 text-center font-extrabold">
            {" "}
            Sign In Now
          </h1>
          <div className="flex justify-center items-center gap-5">
            <a href="" className=" bg-slate-100 py-2 px-6 rounded-xl">R</a>
            <a href="" className=" bg-slate-100 py-2 px-6 rounded-xl">R</a>
            <a href="" className=" bg-slate-100 py-2 px-6 rounded-xl">R</a>
            <a href="" className=" bg-slate-100 py-2 px-6 rounded-xl">R</a>
          </div>
          <div className=" ">
            <form action="">
              <div className=" flex flex-col md:py-10 py-8">
                <input type="text" placeholder=" Nom complet" className="bg-slate-100 outline outline-0 focus:outline-0 rounded-xl md:py-4 py-2 md:px-6 px-3 md:mb-6 mb-3 md:w-full w-full" />
                <input type="text" placeholder=" Nom complet" className="bg-slate-100 outline outline-0 focus:outline-0 rounded-xl md:py-4 py-2 md:px-6 px-3 md:mb-6 mb-3 md:w-full w-full" />
                <button className=" bg-blue-600 py-2 px-20 text-2xl font-bold text-white rounded-xl">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login