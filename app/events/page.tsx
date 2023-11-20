import Image from "next/image";
import Event1 from "@/public/event3.png";
import Event2 from "@/public/event5.jpeg";

export default function Events() {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-gray-900">
            Events
          </h1>
        </div>
      </header>
      <div className="mb-6 md:mb-8 lg:mb-12 rounded-3xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <Image src={Event1} alt="event 1" className="rounded-t-3xl" />
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              GreenTech Conference
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Discover cutting-edge solutions and technologies driving the
              sustainable logistics revolution – be part of the movement for a
              greener tomorrow.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-900"
              >
                Watch The Event
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white rounded-3xl mb-30 shadow-xl dark:bg-gray-800 ">
        <Image src={Event2} alt="event 2" className="rounded-t-3xl" />
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              WCO Symposia
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Empower global trade with a sustainable mindset – join us at the
              WCO conference for discussions on eco-friendly customs solutions
              and responsible commerce.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-900"
              >
                Watch The Event
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
