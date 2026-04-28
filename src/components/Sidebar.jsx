import { Link } from "react-router-dom";

function Sidebar({ Dtitle }) {
  return (
    <>
      <div className="flex h-screen">
        {/* <!-- Sidebar --> */}
        <aside className="w-64 bg-gray-900 text-white">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold">Admin Pro</span>
            </div>
          </div>

          {/* <!-- Search Bar --> */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <nav className="mt-5 px-2">
            {/* <!-- Main Navigation --> */}
            <div className="space-y-4">
              {/* <!-- Dashboard --> */}
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-800 text-white group transition-all duration-200 hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </Link>

              {/* <!-- Analytics Dropdown --> */}
              <div className="space-y-1">
                <Link
                  to="/users"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
                  aria-expanded="true"
                  aria-controls="analytics-dropdown"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-5 w-5 mr-3"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    Users
                  </div>
                </Link>
              </div>

              {/* <!-- Team Dropdown --> */}
              <div className="space-y-1">
                <Link
                  to="/profile"
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
                  aria-expanded="false"
                  aria-controls="team-dropdown"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-5 h-5 mr-3"
                    >
                      <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                      <circle cx="10" cy="7" r="4" />
                    </svg>
                    Profile
                  </div>
                </Link>
              </div>

              {/* <!-- Settings --> */}
              <Link
                to="/settings"
                className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="lucide lucide-settings-icon lucide-settings"
                  className="h-5 w-5 mr-3"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Settings
              </Link>
            </div>
          </nav>

          {/* <!-- User Profile --> */}
          <div className="mt-auto p-4 border-t border-gray-800">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Tom Cook</p>
                <p className="text-xs text-gray-400">View profile</p>
              </div>
            </div>
          </div>
        </aside>

        {/* <!-- Main Content --> */}
        <main className="flex-1 p-6 bg-gray-900">
          <div className="relative">
            <div className="flex  justify-between pr-1">
              <h1 className="text-2xl font-semibold text-white">{Dtitle}</h1>
              <input
                type="text"
                className="bg-gray-800 w-60 text-white pl-8 rounded-lg py-1 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search"
              />
              <div className="absolute right-54  inset-y-0">
                <svg
                  className="h-8 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1> */}
          <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">
              This is a dark sidebar example with submenus.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

{
  /* <script>
        // Dropdown functionality
        document.querySelectorAll('button[aria-controls]').forEach(button => {
            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                const dropdownContent = document.getElementById(button.getAttribute('aria-controls'));
                
                button.setAttribute('aria-expanded', !isExpanded);
                dropdownContent.classNameList.toggle('hidden');
                button.querySelector('svg:last-child').classNameList.toggle('rotate-180');
            });
        });
    </script> */
}
export default Sidebar;
