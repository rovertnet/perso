

function Card() {
  return (
    <>
      <div className=" md:mx-10 mx-10 md:my-10 my-5 md:py-10">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover bg-center md:h-48 md:w-48"
                src="../public/moi.png"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card