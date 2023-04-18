import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <>
        {/* component */}
        <div className="flex h-screen font-sans antialiased">
          {/* Sidebar / channel list */}
          <div className="text-purple-lighter hidden w-64 flex-none bg-gray-900 pb-6 md:block">
            <div className="mb-2 mt-3 flex justify-between px-4 text-white">
              <div className="flex-auto">
                <h1 className="mb-2 truncate text-3xl font-semibold leading-tight">
                  Slack(仮)
                </h1>
                <div className="mb-6 flex items-center">
                  <span className="mr-2 block h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-white opacity-50">
                    Adam Wathan
                  </span>
                </div>
              </div>
              <div>
                <svg
                  className="h-6 w-6 fill-current text-white opacity-25"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between px-4 text-white">
                <div className="opacity-75">Channels</div>
                <div>
                  <svg
                    className="h-4 w-4 fill-current opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                </div>
              </div>
              <div className="bg-teal-dark px-4 py-1 text-white"># general</div>
            </div>
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between px-4 text-white">
                <div className="opacity-75">Direct Messages</div>
                <div>
                  <svg
                    className="h-4 w-4 fill-current opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                </div>
              </div>
              <div className="mb-3 flex items-center px-4">
                <span className="mr-2 block h-2 w-2 rounded-full bg-green-500" />
                <span className="text-white opacity-75">
                  Adam Wathan <span className="text-grey text-sm">(you)</span>
                </span>
              </div>
              <div className="mb-3 flex items-center px-4">
                <span className="mr-2 block h-2 w-2 rounded-full bg-green-500" />
                <span className="text-white opacity-75">David Hemphill</span>
              </div>
              <div className="mb-6 flex items-center px-4 opacity-50">
                <span className="mr-2 h-2 w-2 rounded-full border border-white" />
                <span className="text-white">Steve Schoger</span>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between px-4 text-white">
                <div className="opacity-75">Apps</div>
                <div>
                  <svg
                    className="h-4 w-4 fill-current opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Chat content */}
          <div className="flex flex-1 flex-col overflow-hidden bg-white">
            {/* Top bar */}
            <div className="flex flex-none items-center border-b border-gray-900 bg-gray-800 px-6 py-2">
              <div className="flex flex-col">
                <h3 className="mb-1 font-extrabold text-white">#general</h3>
                <div className="truncate text-sm text-white">
                  Chit-chattin' about ugly HTML and mixing of concerns.
                </div>
              </div>
              <div className="ml-auto hidden md:block">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search"
                    className="border-grey appearance-none rounded-lg border py-2 pl-8 pr-4"
                  />
                  <div className="absolute -mt-7 flex items-center justify-center pl-3">
                    <svg
                      className="text-grey h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat messages */}
            <div className="hidden-scrollbar flex-1 overflow-y-scroll bg-gray-800 px-6 py-4">
              {/* A message */}
              <div className="mb-4 flex items-start text-sm">
                <img src="/2.png" className="mr-3 h-10 w-10 rounded" />
                <div className="flex-1 overflow-hidden">
                  <div>
                    <span className="font-bold text-white">Steve Schoger</span>
                    <span className="text-xs text-white"> 11:46</span>
                  </div>
                  <p className="leading-normal text-white">
                    The slack from the other side.
                  </p>
                </div>
              </div>
              {/* A message */}
              <div className="mb-4 flex items-start text-sm">
                <img src="/1.png" className="mr-3 h-10 w-10 rounded" />
                <div className="flex-1 overflow-hidden">
                  <div>
                    <span className="font-bold text-white">Adam Wathan</span>
                    <span className="text-xs text-white"> 12:45</span>
                  </div>
                  <p className="leading-normal text-white">
                    How are we supposed to control the marquee space without an
                    utility for it? I propose this:
                  </p>
                  <div className="mt-2 overflow-scroll whitespace-pre p-3 font-mono text-sm text-orange-400">
                    .marquee-lightspeed {"{"} -webkit-marquee-speed: fast; {"}"}
                    .marquee-lightspeeder {"{"} -webkit-marquee-speed: faster;{" "}
                    {"}"}
                  </div>
                </div>
              </div>
              {/* A message */}
              <div className="mb-4 flex items-start text-sm">
                <img src="/3.png" className="mr-3 h-10 w-10 rounded" />
                <div className="flex-1 overflow-hidden">
                  <div>
                    <span className="font-bold text-white">David Hemphill</span>
                    <span className="text-xs text-white"> 12:46</span>
                  </div>
                  <p className="leading-normal text-white">
                    <a
                      href="#"
                      className="inline-block bg-blue-400 text-blue-900 hover:underline"
                    >
                      @Adam Wathan
                    </a>{" "}
                    the size of the generated CSS is creating a singularity in
                    space/time, we must stop adding more utilities before it's
                    too late!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none bg-gray-800 px-4 pb-6">
              <Form />
            </div>
          </div>
        </div>
      </>
    </>
  );
}