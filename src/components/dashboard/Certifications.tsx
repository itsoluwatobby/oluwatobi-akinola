import Title from "../Title";
import data from "../../data/data.json";

export default function Certifications() {

  return (
    <section
      id='certification'
      className=" h[87vh] pt-10 pb-14 mb-0 flex flex-col items-center gap-y-6 bg-inherit"
    >
      <Title bullet="04" page="Certifications" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border ${cert.display ? "block" : "hidden"} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-gradient-to-tr from-white to-slate-300`}
          >
            <img
              src={cert.thumbnail}
              alt={cert.title}
              className="w-full rounded-full h-40 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg text-black font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
              <p className="text-blue-600 hover:underline text-sm">View Certificate</p>
            </div>
          </a>
        ))}
      </div>
        
    </section>
  );
}