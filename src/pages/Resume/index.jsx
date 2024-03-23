const timeline = [
  {
    name: "Technical Account Manager | Hush Communications Canada",
    description:
      "Championed customer success by leading the technical onboarding of over 15 new customers each month. Recognized with top sales awards for 9 consecutive months.",
    date: "Apr 2019 - Current",
    dateTime: "2019-04",
  },
  {
    name: "Customer Support Manager | Argo Blockchain",
    description:
      "Collaborated closely with the executive management team to establish a culture of integrity and excellence.",
    date: "Sept 2018 – February 2019",
    dateTime: "2021-12",
  },
  {
    name: "Owner/Event Producer | Brockton Point Productions",
    description:
      "Led the creation of immersive tech events with a focus on practical adoption of innovative tech, blockchain, and cybersecurity.",
    date: "Jan 2017 – Dec 2018",
    dateTime: "2022-02",
  },
  {
    name: "Customer Success Representative | Tigerlead Solutions",
    description:
      "Provided proactive technical support to high-value customers, ensuring their success through periodic health checks and product training.",
    date: "Jan 2015 – Sept 2017",
    dateTime: "2022-12",
  },
];

export default function Resume() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Resume{" "}
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1">
                <p className="text-lg leading-8 text-gray-600">
                  Download my{" "}
                  <a
                    className="text-blue-800"
                    href="https://drive.google.com/file/d/1RNWxOgm2kQyTnxuiQxELKW2REgxG5gO6/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    complete resume here.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-10" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
