import "./App.css";
import headshot from "./headshot.jpeg";
import resume from "./kyle_long_resume.pdf";
import jojo from "./jojo.png";
import loopy from "./music.svg";
import {AcademicCapIcon, BuildingOfficeIcon} from "@heroicons/react/20/solid";
const timeline = [
  {
    id: 1,
    content: "Software Engineer Intern",
    target: "Visa",
    href: "#",
    date: "June - Aug 2017",
    datetime: "",
    icon: BuildingOfficeIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 2,
    content: "Software Engineer Intern",
    target: "Adobe",
    href: "#",
    date: "May - Aug 2019",
    datetime: "",
    icon: BuildingOfficeIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 3,
    content: "B.S Computer Science",
    target: "Virginia Tech",
    href: "#",
    date: "May 2020",
    datetime: "",
    icon: AcademicCapIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 4,
    content: "Fullstack Software Engineer",
    target: "Academia.edu",
    href: "#",
    date: "March 2021 - Oct 2022",
    datetime: "",
    icon: BuildingOfficeIcon,
    iconBackground: "bg-green-500",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  return (
    <div className="flex flex-col items-center mx-auto overflow-y-scroll h-screen px-4 sm:px-6 lg:px-8 bg-gray-700">
      <div className="mt-3 flex flex-col items-center">
        <h1 className="font-bold tracking-wide text-white">
          kyle alexander long
        </h1>
        <div>
          <span className="font-bold text-blue-200 mr-2">builder.</span>
          <span className="font-bold text-blue-200 mr-2">traveler.</span>
          <span className="font-bold text-blue-200 mr-2">dreamer.</span>
        </div>
        <img src={headshot} className="rounded-full w-28 mt-2" alt="headshot" />
        <div className="mt-2 flex flex-row space-x-2">
          <a
            href="https://github.com/kylelong"
            className="hover:cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kylel95"
            className="hover:cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href={resume} target="_blank" rel="noreferrer">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-white rounded-md"
            >
              <path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          {" "}
          <div>
            <h1 className="font-bold tracking-wide text-blue-200 my-1">
              [ who i am ]
            </h1>

            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="fill-white"
                className="w-6 h-6 stroke-white mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="font-bold text-white mx-1">Charlotte, NC</span>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="fill-red-200"
                className="w-6 h-6 fill-red-200 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <div>
                <span className="font-bold text-white mr-1">[ running ]</span>
                <span className="font-bold text-white mr-1">[ wine ]</span>
                <span className="font-bold text-white mr-1">[ cello ]</span>
                <span className="font-bold text-white mr-1">[ golf ]</span>
              </div>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="fill-white"
                className="w-6 h-6 stroke-white mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <div>
                <span className="font-bold text-white mr-1">
                  [ full stack ]
                </span>
                <span className="font-bold text-white mr-1">[ frontend ]</span>
                <span className="font-bold text-white mr-1">[ backend ]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold tracking-wide text-blue-200 my-1">
              [ projects ]
            </h1>
            <div className="flex flex-col space-y-2">
              <a href="https://www.jojo.so" rel="noreferrer" target="_blank">
                <div>
                  <div className="flex flex-row">
                    <img src={jojo} alt="jojo" className="w-7 h-7" />
                    <div className="text-white font-bold ml-1 relative top-1">
                      JoJo
                    </div>
                  </div>
                  <div className="text-white font-bold">
                    AI conversational language learning
                  </div>
                </div>
              </a>
              <a href="https://www.loopy.fm" rel="noreferrer" target="_blank">
                <div>
                  <div className="flex flex-row">
                    <img src={loopy} alt="loopy" className="w-7 h-7" />
                    <div className="text-white font-bold ml-1 relative top-1">
                      Loopy
                    </div>
                  </div>
                  <div className="text-white font-bold">
                    Find and share music you love
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="font-bold tracking-wide text-blue-200  my-1">
              [ career ]
            </h1>
            <div className="flow-root">
              <ul className="-mb-8">
                {timeline.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8">
                      {eventIdx !== timeline.length - 1 ? (
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              "h-8 w-8 rounded-full flex items-center justify-center"
                            )}
                          >
                            <event.icon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-sm text-white">
                              {event.content}{" "}
                              <a
                                href={event.href}
                                className="font-medium text-blue-200"
                              >
                                {event.target}
                              </a>
                            </p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-500">
                            <time dateTime={event.datetime}>{event.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
