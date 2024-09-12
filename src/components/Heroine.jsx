import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hrithi.JPG";

const Heroine = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:pl-12 lg:pr-8">
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Hrithi Chindalur Rakesh
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Student
            </span>
            <p className="my-2 py-6 font-light tracking-tighter lg:max-w-3xl lg:ml-0 ml-4">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="profilepic"
              className="object-cover rounded-full" // Added rounded corners and cover object-fit
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroine;
