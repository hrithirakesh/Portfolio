import { CODING_PROFILES } from "../constants"; // Ensure the constant name is correct

const CodingProfiles = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Coding Profiles</h1>

      <div className="flex flex-wrap lg:justify-center">
        {CODING_PROFILES.map((profile, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-xl">
              <h6 className="mb-2 font-semibold">
                {profile.platform}
              </h6>
              <p className="mb-4 text-neutral-400">{profile.username}</p>
              <a
                href={profile.url}
                className="text-purple-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
