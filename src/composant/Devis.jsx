
function Devis() {
  return (
    <>
      <div className="md:px-14 px-10 md:mx-12 mx-10 rounded-md bg-slate-700">
        <button className=""></button>
        <div className=" mb-10 bg-white opacity-60 rounded-md md:px-10 px-5 md:py-10 py-5 ">
          {/* Formulaire */}
          <form action="">
            <div className="flex justify-center items-center gap-10">
              <input
                type="text"
                placeholder="Votre nom"
                className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-gray-300 text-white outline outline-0 focus:outline-0"
              />
              <input
                type="text"
                placeholder="Votre nom"
                className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-gray-300 text-white outline outline-0 focus:outline-0"
              />
            </div>
          </form>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Devis