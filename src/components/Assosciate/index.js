const Assosciate = () => {
  const Login = (e) => {
    e.preventDefault();
    console.log("hbhjb");
  };
  return (
    <div className="flex">
      <div className="w-2/5">
        <h4 className="mt-[15.258rem] text-2xl	 font-medium	 mb-[1rem] px-[1rem]">
          Login to your JSR Group SunCity account, Wherever you are
        </h4>
        <div className="flex justify-around">
          <form className=" w-[26.813rem] h-[12.625rem]">
            <div>
              <input className="py-[1rem]" placeholder="Phone Number" type="tel" />
            </div>
            <br />
            <div>
              <input className="py-[1rem]" type="password" placeholder="Password" />
            </div>

            <div>
              <button className= "px-[1rem] font-medium	text-sm text-white rounded bg-blue-400" onClick={Login}>Login</button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center bg-sky-500	w-3/5 h-screen">
        <h1 className="text-white flex-wrap text-6xl flex	font-medium		 mb-[1rem]">
          JSR GROUP SUNCITY
        </h1>
      </div>
    </div>
  );
};

export default Assosciate;
