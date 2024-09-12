import { HOBBIES } from "../constants"; // Ensure the constant name is correct

const Hobbies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Clusters</h1>

      <div className="flex flex-wrap justify-center">
        {HOBBIES.map((hobby, index) => (
          <div key={index} className="mb-8 flex justify-center lg:w-1/2">
            <div className="w-full max-w-xl px-4">
              <h6 className="mb-2 font-semibold">
                {hobby.name}
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {hobby.description}
              </p>
              <div className="flex flex-wrap">
                {hobby.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
