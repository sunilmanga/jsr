import React, { useState } from 'react';

const Associate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");
    // Add your login logic here
  };

  return (
    <div className="flex">
      <div className="w-2/5">
        <h4 className="mt-[15.258rem] text-2xl font-medium mb-[1rem] px-[1rem]">
          Login to your JSR Group SunCity account, Wherever you are
        </h4>
        <div className="flex justify-around">
          <form className="w-[26.813rem] h-[12.625rem]">
            <div className="relative mb-[2rem]">
              <input
                className="py-[1rem] w-full border-b border-gray-300 focus:border-blue-400"
                placeholder="Phone Number"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={() => setPhoneNumberFocus(false)}
                onFocus={() => setPhoneNumberFocus(true)}
              />
              {phoneNumberFocus || phoneNumber ? (
                <label className="absolute left-0 top-0 ml-[1rem] text-red-500 text-xs">
                  Phone Number
                </label>
              ) : null}
            </div>
            <div className="relative mb-[2rem]">
              <input
                className="py-[1rem] w-full border-b border-gray-300 focus:border-blue-400"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordFocus(false)}
                onFocus={() => setPasswordFocus(true)}
              />
              {passwordFocus || password ? (
                <label className="absolute left-0 top-0 ml-[1rem] text-red-500 text-xs">
                  Password
                </label>
              ) : null}
            </div>

            <div>
              <button
                className="px-[1rem] font-medium text-sm text-white rounded bg-blue-400"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center bg-sky-500 w-3/5 h-screen">
        <h1 className="text-white flex-wrap text-6xl flex font-medium mb-[1rem]">
          JSR GROUP SUNCITY
        </h1>
      </div>
    </div>
  );
};

export default Associate;
