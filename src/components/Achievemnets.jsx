import { ACHIEVEMENTS } from "../constants"; // Ensure the constant name is correct

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h1 className="my-16 text-center text-4xl font-bold text-white">Achievements</h1>

      <div className="flex flex-wrap justify-center items-start gap-8"> {/* Flex for alignment */}
        {ACHIEVEMENTS.map((achievement, index) => (
          <div 
            key={index} 
            className="lg:w-1/3 w-full px-4"  // Spacing and responsiveness for each item
          >
            <div className="w-full max-w-md mx-auto p-6"> {/* Removed background and shadow */}
              <h6 className="mb-3 font-semibold text-center text-xl text-white"> {/* White text */}
                {achievement.title}
              </h6>
              <p className="mb-4 text-neutral-400 text-justify"> {/* Gray text */}
                {achievement.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2"> {/* Centered badges */}
                {achievement.details.map((detail, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {detail}
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

export default Achievements;
