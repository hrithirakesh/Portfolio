import { RiReactjsLine } from "react-icons/ri"; // React icon
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiCplusplus, SiAngular, SiMysql, SiTableau } from "react-icons/si"; // Other technology icons
import { FaJava } from "react-icons/fa"; // Java icon from FontAwesome

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* React */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="mt-4 text-lg">React</p>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
          <p className="mt-4 text-lg">Python</p>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
          <p className="mt-4 text-lg">HTML5</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-600" />
          <p className="mt-4 text-lg">CSS3</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
          <p className="mt-4 text-lg">JavaScript</p>
        </div>

        {/* C++ */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-400" />
          <p className="mt-4 text-lg">C++</p>
        </div>

        {/* Java */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-600" />
          <p className="mt-4 text-lg">Java</p>
        </div>

        {/* Angular */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-7xl text-red-600" />
          <p className="mt-4 text-lg">Angular</p>
        </div>

        {/* SQL */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-700" />
          <p className="mt-4 text-lg">MySQL</p>
        </div>

        {/* Tableau */}
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-blue-500" />
          <p className="mt-4 text-lg">Tableau</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
