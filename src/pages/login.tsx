export default function Login() {
  const googleUrl = `${import.meta.env.VITE_API_URL}/auth/google`;

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center p-6">
      <div className="flex flex-col items-center max-w-sm w-full">
        {/* App Title */}
        <h1 className="text-3xl font-semibold tracking-tight text-[#2C2C2C] mb-8">
          Pomodoro with Purpose
        </h1>

        {/* Login Card */}
        <div className="w-full bg-white shadow-sm rounded-2xl p-8 flex flex-col items-center gap-6">
          <h2 className="text-xl font-medium text-[#2C2C2C]">Sign in</h2>

          <a
            href={googleUrl}
            className="
              w-full text-center bg-[#2C2C2C] text-white py-3 rounded-xl 
              transition-transform duration-200 ease-out
              hover:scale-105 hover:shadow-md
            "
          >
            Continue with Google
          </a>
        </div>

        {/* Minimal footer text */}
        <p className="text-xs text-[#777] mt-6">Stay focused. Stay mindful.</p>
      </div>
    </div>
  );
}
