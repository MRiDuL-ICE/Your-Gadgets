import { Helmet } from "react-helmet";

const Signup = () => {
  return (
    <div className="w-5/12 mx-auto p-16 flex flex-col gap-6 border mt-10 rounded-lg shadow-lg">
      <Helmet>
        <title>{`Your Gadget | Sign Up`}</title>
      </Helmet>
      <label className="input input-bordered text-[#F3445A] border-[#F3445A] flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Enter Your Name" />
      </label>
      <label className="input input-bordered text-[#F3445A] border-[#F3445A] flex items-center gap-2">
        Email
        <input type="email" className="grow" placeholder="Enter Your Email" />
      </label>
      <label className="input input-bordered text-[#F3445A] border-[#F3445A] flex items-center gap-2">
        Phone
        <input type="text" className="grow" placeholder="Enter Your Mobile Number" />
      </label>
      <label className="input input-bordered text-[#F3445A] border-[#F3445A] flex items-center gap-2">
        Password
        <input type="password" className="grow" placeholder="Enter Your Password" />
      </label>
      <label className="input input-bordered text-[#F3445A] border-[#F3445A] flex items-center gap-2">
        Confirm Password
        <input type="password" className="grow" placeholder="Enter Your Password" />
      </label>
      <button className="btn border-1 bg-[#F3445A] text-white border-[#f3445a] hover:bg-[#f3445a] hover:text-white text-lg w-72 mx-auto">Submit</button>
    </div>
  );
};

export default Signup;
