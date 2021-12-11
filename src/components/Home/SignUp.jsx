import { CheckCircleIcon } from "@heroicons/react/outline";

const SignUp = () => {
  return (
    <div className="signUp py-6 space-y-12">
      <form autoComplete="off">
        <div className="name lg:flex items-center justify-between w-full ">
          <div className="input-field lg:w-6/12 lg:mr-4">
            <label htmlFor="FirstName">Firstname</label>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              autocomplete="off"
            />
          </div>
          <div className="input-field lg:w-6/12">
            <label htmlFor="LastName">Lastname</label>
            <input type="text" name="LastName" id="LastName" />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="Email" />
        </div>
        <div className="input-field">
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" id="Password" />
        </div>

        <div>
          {/* is password strong text */}
          <p className=" text-sm font-semibold tracking-wider text-rose-800">
            Seems good, We suggest to make it stronger!
          </p>
        </div>

        <div className="space-y-2 mt-3">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            <p className="text-sm tracking-wider">
              Contains atleast one uppercase
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            <p className="text-sm tracking-wider">
              Contains atleast one number
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
            <p className="text-sm tracking-wider">
              Contains atleast one special character
            </p>
          </div>
        </div>
      </form>

      <div className="btns flex flex-col items-center space-y-4">
        <button className="bg-emerald-500 rounded-lg text-white font-semibold text-lg w-full py-2 hover:bg-emerald-600 transition-colors ease-linear">
          Sign Up
        </button>
        <button className="bg-sky-600 rounded-lg text-white font-semibold text-lg w-full py-2 outline-none hover:bg-blue-700 transition-colors ease-linear">
          Sign Up With Google
        </button>
      </div>

      <div>
        <p className="text-xs text-center text-gray-700">
          By Clicking the above button, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
};

export default SignUp;
