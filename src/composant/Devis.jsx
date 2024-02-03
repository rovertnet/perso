import { IoMailUnread } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

function Devis() {
  return (
    <>
      <div className="md:px-10 px-10  md:py-3 py-5 bg-cover object-cover bg-[url('../../public/bg1.jpg')] ">
        <div className="flex justify-between items-center">
          <button className=" bg-black md:py-2 py-2 md:px-14 px-7 text-white md:my-10 my-8 font-extrabold rounded-md">
            Modal
          </button>
          <div className=" flex justify-center items-center gap-3 bg-white/35 backdrop-blur-2xl md:px-10 px-3 md:mb-8 mb-6 rounded-md md:py-1 py-0">
            <button className=" bg-black rounded-md md:py-2 py-2 md:px-4 p-4 text-white md:my-10 my-8 font-extrabold ">
              <FaPhoneAlt className=" text-white font-bold text-xl" />
            </button>
            <button className=" bg-black rounded-md md:py-2 py-2 md:px-4 p-4 text-white md:my-10 my-8 font-extrabold ">
              <RiMapPin2Fill className=" text-white font-bold text-xl" />
            </button>
            <button className=" bg-black rounded-md md:py-2 py-2 md:px-4 p-4 text-white md:my-10 my-8 font-extrabold ">
              <IoMailUnread className=" text-white font-bold text-xl" />
            </button>
          </div>
        </div>
        {/* Block form */}
        <div className="flex flex-col md:flex-row-reverse justify-normal items-center gap-10">
          <div className=" md:w-5/3 w-5/3 md:px-10 px-3">
            <img
              src="../public/CONTACT.png"
              alt=""
              className=" md:w-full rounded-md"
            />
          </div>
          {/* le formulaire */}
          <div className=" md:w-4/5 w-5/3">
            <div className=" mb-10 shadow-lg bg-white/35 backdrop-blur-2xl rounded-md md:px-10 px-8 md:py-10 py-8 md:w-full w-full">
              {/* Formulaire */}
              <form action="">
                <div className="flex md:flex-row flex-col justify-center items-center gap-3">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-white text-slate-900 outline outline-0 focus:outline-0"
                  />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-white text-slate-900 outline outline-0 focus:outline-0"
                  />
                </div>
                <div className=" md:my-5 my-3">
                  <input
                    type="mail"
                    placeholder="Votre mail"
                    className=" md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-white text-slate-900 outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="md:my-5 my-3">
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Votre message"
                    className="md:px-5 px-3 md:py-2 py-2 rounded-md md:w-full w-full bg-white text-slate-900 outline outline-0 focus:outline-0"
                  />
                </div>
                <div>
                  <button className=" bg-black text-white rounded-md font-semibold text-xl md:px-10 px-28 md:py-3 py-2">
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
