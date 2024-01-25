
function Login() {
  return (
    <>
      <div className="md:mx-96 mx-80 md:px-8 px-6 md:h-full h-full rounded-lg bg-white md:my-60 my-56 shadow-md md:py-14 py-12">
        <div>
          <h1 className=" text-slate-900 md:text-3xl text-2xl md:mb-14 mb-11 text-center">
            {" "}
            Log in
          </h1>
          <div className="flex justify-center items-center gap-5">
            <a href="">R</a>
            <a href="">R</a>
            <a href="">R</a>
            <a href="">R</a>
          </div>
          <div className=" ">
            <form action="">
              <div className=" flex flex-col md:py-10 py-8">
                <input type="text" placeholder=" Nom complet" className=" md:py-4 py-2 md:px-6 px-3 md:mb-6 mb-3 md:w-full w-full" />
                <input type="text" placeholder=" Nom complet" className=" md:py-4 py-2 md:px-6 px-3 md:mb-6 mb-3 md:w-full w-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login