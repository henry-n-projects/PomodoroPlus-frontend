import { Outlet } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
export default function AppLayout() {
  const { data: user } = useCurrentUser();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 flex justify-between items-center">
        <div>Pomodoro Plus</div>
        <div>{user ? user.name : "Not logged in"}</div>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
