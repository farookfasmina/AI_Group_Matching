export default function Sidebar({ role = "student" }) {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      
      {/* App Name */}
      <h2 className="text-2xl font-bold text-indigo-400 mb-8">
        AI Study Group
      </h2>

      {/* Navigation */}
      <nav className="space-y-4">

        <a className="block px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Dashboard
        </a>

        {role === "student" && (
          <>
            <a className="block px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
              My Groups
            </a>
            <a className="block px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
              Preferences
            </a>
          </>
        )}

        {role === "admin" && (
          <>
            <a className="block px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
              Manage Users
            </a>
            <a className="block px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">
              Manage Groups
            </a>
          </>
        )}

        <a className="block px-3 py-2 rounded hover:bg-red-600 cursor-pointer mt-6">
          Logout
        </a>

      </nav>
    </aside>
  );
}
