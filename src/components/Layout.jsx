import Sidebar from "./Sidebar";

function Layout({ title, children }) {
  return (
    <div className="bg-gray-900 text-white">
      <Sidebar />

      <main className="p-6 bg-gray-900 ml-64 min-h-screen overflow-y-auto">
        <h1 className="text-2xl text-white font-semibold mb-6">{title}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
