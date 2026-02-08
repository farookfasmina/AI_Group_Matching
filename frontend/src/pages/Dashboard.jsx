import Sidebar from "../components/Sidebar";
import { getUserRole, logout } from "../utils/auth";

export default function Dashboard() {
  const userRole = getUserRole(); 

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar role={userRole} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
  <div>
    <h1 className="text-xl font-semibold text-gray-800">
      Dashboard
    </h1>
    <p className="text-sm text-gray-500">
      AI-powered study group overview
    </p>
  </div>

  <div className="flex items-center gap-3">
    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 capitalize">
      {userRole}
    </span>
    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
      {userRole.charAt(0).toUpperCase()}
    </div>
  </div>
  <button
  onClick={() => {
    logout();
    window.location.href = "/login";
  }}
  className="text-sm text-red-600 font-semibold"
>
  Logout
</button>

</header>


        {/* Content */}
        <main className="p-8 space-y-10">

          {/* KPI Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <KpiCard title="Active Groups" value="3" color="indigo" />
            <KpiCard title="Total Members" value="12" color="green" />
            <KpiCard title="Upcoming Sessions" value="5" color="purple" />
            <KpiCard title="New Alerts" value="2" color="red" />
          </section>

          {/* Main Panels */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* AI Recommended Groups */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">
                AI-Recommended Study Groups
              </h3>

              <div className="space-y-4">
                <GroupCard
                  title="Machine Learning"
                  desc="Matched based on your AI & data science preferences"
                  mode="Online"
                />
                <GroupCard
                  title="Web Development"
                  desc="Recommended from your React & backend skills"
                  mode="Offline"
                />
                <GroupCard
                  title="Data Structures"
                  desc="Suggested for algorithm practice improvement"
                  mode="Online"
                />
              </div>
            </div>

            {/* Activity Panel */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">
                Recent Activity
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li>🔔 New group recommendation available</li>
                <li>📅 ML session scheduled for tomorrow</li>
                <li>👥 New member joined your group</li>
                <li>⚙ Preferences updated successfully</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-indigo-600 text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">
                Improve your AI recommendations
              </h4>
              <p className="text-indigo-100 text-sm">
                Update preferences to get better-matched study groups
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition">
              Update Preferences
            </button>
          </section>

        </main>
      </div>
    </div>
  );
}

/* ================== COMPONENTS ================== */

function KpiCard({ title, value, color }) {
  const colors = {
    indigo: "text-indigo-600 bg-indigo-100",
    green: "text-green-600 bg-green-100",
    purple: "text-purple-600 bg-purple-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${colors[color]}`}
      >
        📊
      </div>
    </div>
  );
}

function GroupCard({ title, desc, mode }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-xs px-3 py-1 bg-slate-100 rounded-full">
          {mode}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        {desc}
      </p>
    </div>
  );
}
