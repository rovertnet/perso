

function GridImg() {
  return (
    <>
      <div className="flex gap-4 md:mx-10 mx-7">
        <div className="grid gap-4">
          <img
            className="h-full max-w-full rounded-lg"
            src="../public/MISION/1.png"
            alt=""
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <img
              className="md:h-full max-w-full rounded-lg"
              src="../public/1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="md:h-full max-w-full rounded-lg"
              src="../public/2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GridImg