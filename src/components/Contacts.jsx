import { CONTACT } from "../constants";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2 text-purple-400" /> 
          <span className="mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
            {CONTACT.address}
          </span>
        </p>
        <p className="my-4 flex items-center justify-center">
          <FaPhone className="mr-2 text-purple-400" />
          <span className="mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
            {CONTACT.phoneNo}
          </span>
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center justify-center my-4"
        >
          <FaEnvelope className="mr-2 text-purple-400" />
          <span className="mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
            {CONTACT.email}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
