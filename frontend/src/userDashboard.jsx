export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#1e0033] text-white flex flex-col items-center justify-center px-4">
      <div className="bg-white/10 rounded-2xl shadow-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, User!</h1>
        <p className="text-purple-200 mb-6">This is your dashboard. Here you can view your projects, connect with mentors, and track your progress.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Your Projects</h2>
            <p className="text-purple-100">No projects yet. Start a new one!</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Mentor Chat</h2>
            <p className="text-purple-100">No active chats. Find a mentor to begin!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
