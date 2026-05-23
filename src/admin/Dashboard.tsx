import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ConstructionDashboard() {
  const [, navigate] = useLocation();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin-auth");

    if (!isAdmin) {
      navigate("/admin-login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("admin-auth");
    navigate("/");
  };

  const stats = [
    {
      title: "Quote Requests",
      value: "1,248",
      change: "+12%",
      icon: "📄",
    },
    {
      title: "Messages",
      value: "328",
      change: "+8%",
      icon: "💬",
    },
    {
      title: "Projects",
      value: "42",
      change: "+4%",
      icon: "🏗️",
    },
    {
      title: "Visitors",
      value: "18.2K",
      change: "+22%",
      icon: "📈",
    },
  ];

  const recentQuotes = [
    {
      name: "John David",
      project: "Duplex Construction",
      budget: "$120,000",
      status: "Pending",
    },
    {
      name: "Sarah James",
      project: "Office Renovation",
      budget: "$32,000",
      status: "Approved",
    },
    {
      name: "Michael Brown",
      project: "Warehouse Build",
      budget: "$210,000",
      status: "Reviewing",
    },
  ];

  const messages = [
    {
      name: "Daniel Wilson",
      message: "I need a quotation for a 4-bedroom duplex.",
      time: "2 mins ago",
    },
    {
      name: "Emily Johnson",
      message: "Can your team handle interior finishing?",
      time: "12 mins ago",
    },
    {
      name: "Chris Adams",
      message: "I want to schedule a site inspection.",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-black text-white p-6 hidden lg:flex flex-col justify-between">
        <div>
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-wide">WINVAISE</h1>

            <p className="text-zinc-400 text-sm mt-1">Construction Admin</p>
          </div>

          <nav className="space-y-3">
            {[
              "Dashboard",
              "Analytics",
              "Quotes",
              "Messages",
              "Projects",
              "Team",
              "Testimonials",
              "Settings",
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${
                  index === 0
                    ? "bg-yellow-500 text-black font-semibold"
                    : "hover:bg-zinc-900 text-zinc-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-zinc-900 p-5 rounded-3xl mt-10">
          <p className="text-sm text-zinc-400 mb-2">Storage Usage</p>

          <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden">
            <div className="bg-yellow-500 h-full w-[70%]"></div>
          </div>

          <p className="text-xs text-zinc-400 mt-2">7GB of 10GB used</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900">
              Dashboard Overview
            </h2>

            <p className="text-zinc-500 mt-1">
              Monitor your construction business performance.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white px-5 py-3 rounded-2xl outline-none border border-zinc-200 w-64"
            />

            <button className="relative bg-white p-3 rounded-2xl border border-zinc-200">
              🔔
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Admin Profile */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-zinc-200">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="admin"
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="font-semibold text-sm">Admin User</p>

                  <p className="text-xs text-zinc-500">Super Admin</p>
                </div>
              </div>

              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-4xl">{stat.icon}</div>

                <span className="text-green-600 text-sm font-semibold bg-green-100 px-3 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>

              <h3 className="text-zinc-500 text-sm">{stat.title}</h3>

              <p className="text-4xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Traffic Analytics</h3>

                <p className="text-zinc-500 text-sm mt-1">
                  Website visitors and conversions
                </p>
              </div>

              <select className="border border-zinc-200 rounded-xl px-4 py-2 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last Year</option>
              </select>
            </div>

            <div className="h-72 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl flex items-end justify-around p-6">
              {[40, 65, 55, 80, 70, 90, 60].map((height, index) => (
                <div
                  key={index}
                  className="bg-yellow-500 w-10 rounded-t-2xl"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Lead Sources */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
            <h3 className="text-2xl font-bold mb-6">Lead Sources</h3>

            <div className="space-y-5">
              {[
                {
                  source: "Google Search",
                  value: "48%",
                },
                {
                  source: "Facebook Ads",
                  value: "22%",
                },
                {
                  source: "Instagram",
                  value: "17%",
                },
                {
                  source: "Direct Traffic",
                  value: "13%",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">{item.source}</p>

                    <p className="text-zinc-500">{item.value}</p>
                  </div>

                  <div className="w-full bg-zinc-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-black h-full rounded-full"
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Quotes */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Recent Quotes</h3>

              <button className="bg-black text-white px-5 py-2 rounded-xl">
                View All
              </button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-zinc-500 border-b border-zinc-200">
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Project</th>
                  <th className="pb-4">Budget</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentQuotes.map((quote, index) => (
                  <tr key={index} className="border-b border-zinc-100">
                    <td className="py-5 font-medium">{quote.name}</td>

                    <td>{quote.project}</td>

                    <td>{quote.budget}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          quote.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : quote.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {quote.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Recent Messages</h3>

              <button className="text-yellow-600 font-semibold">
                See More
              </button>
            </div>

            <div className="space-y-5">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{msg.name}</h4>

                      <p className="text-xs text-zinc-500">{msg.time}</p>
                    </div>

                    <p className="text-zinc-600 text-sm mt-1 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
