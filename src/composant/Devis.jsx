function Devis() {
  return (
    <>
      <div className="md:px-10 px-10  md:py-3 py-5 rounded-md bg-slate-700">
        <div className="flex justify-between items-center">
          <button className=" bg-black md:py-2 py-2 md:px-14 text-white md:my-10 my-8 font-extrabold rounded-md">
            Modal
          </button>
          <button className=" bg-black md:py-2 py-2 md:px-4 px-2 text-white md:my-10 my-8 font-extrabold rounded-full">
            X
          </button>
        </div>
        {/* Block form */}
        <div className="flex flex-col md:flex-row-reverse justify-normal items-center gap-10">
          <div className=" md:w-2/6">
            <img
              src="../public/moi.png"
              alt=""
              className=" md:w-full rounded-md"
            />
          </div>
          {/* le formulaire */}
          <div className=" md:w-4/5 w-5/3">
            <div className=" mb-10 shadow-lg shadow-zinc-200 bg-white opacity-40 rounded-md md:px-10 px-3 md:py-10 py-5 md:w-full w-full">
              {/* Formulaire */}
              <form action="">
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-gray-300 text-slate-900 outline outline-0 focus:outline-0"
                  />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-gray-300 text-slate-900 outline outline-0 focus:outline-0"
                  />
                </div>
                <div className=" md:my-5 my-3">
                  <input
                    type="mail"
                    placeholder="Votre mail"
                    className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-gray-300 text-slate-900 outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="md:my-5 my-3">
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Votre message"
                    className="md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-gray-300 text-slate-900 outline outline-0 focus:outline-0"
                  />
                </div>
                <div>
                  <button className=" bg-black text-white rounded-md font-semibold text-xl md:px-10 px-20 md:py-3 py-4">
                    {" "}
                    Envoyez
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Devis;
