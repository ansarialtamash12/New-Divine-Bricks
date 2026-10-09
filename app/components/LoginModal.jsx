import { useState } from "react";
import { X, User, Lock, Eye, EyeOff, ShieldCheck, RefreshCw } from "lucide-react";

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ userId: "", password: "", captcha: "" });
  const [remember, setRemember] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171A1C]/60 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F4ED] rounded-2xl w-full max-w-md relative shadow-2xl max-h-[90vh] overflow-y-auto border border-[#59636B]/15 p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#59636B] hover:text-[#171A1C] p-1.5 rounded-full hover:bg-[#59636B]/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-[#171A1C] mb-1">Welcome back</h2>
        <p className="text-xs text-[#59636B] mb-6">
          Sign in with your UserID or username to open the agent dashboard.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handle login
          }}
          className="space-y-4"
        >
          {/* UserID */}
          <div>
            <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
              UserID or Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
              <input
                name="userId"
                value={form.userId}
                onChange={handleChange}
                placeholder="e.g. 100462 or your username"
                className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full h-11 pl-10 pr-10 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#59636B] hover:text-[#171A1C]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Captcha */}
          <div>
            <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
              Captcha
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                <input
                  name="captcha"
                  value={form.captcha}
                  onChange={handleChange}
                  placeholder="Enter code"
                  className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                />
              </div>
              <div className="h-11 px-4 flex items-center justify-center bg-gradient-to-r from-[#F5A623] to-[#E09400] rounded-xl font-bold text-[#171A1C] tracking-widest select-none">
                396018
              </div>
              <button
                type="button"
                className="h-11 w-11 flex items-center justify-center border border-[#59636B]/25 rounded-xl text-[#59636B] hover:border-[#F5A623] hover:text-[#F5A623] transition-all"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-[#F5A623] w-4 h-4 rounded cursor-pointer"
              />
              <span className="text-xs text-[#59636B] font-medium">Remember me</span>
            </label>
            <button
              type="button"
              className="text-xs font-bold text-[#F5A623] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold rounded-xl hover:shadow-lg hover:shadow-[#F5A623]/40 transition-all active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        {/* Footer — switch to register */}
        <div className="text-center text-xs mt-5 pt-4 border-t border-[#59636B]/15">
          <span className="text-[#59636B]">New to Divine Bricks? </span>
          <button
            onClick={onSwitchToRegister}
            className="text-[#F5A623] font-bold hover:underline"
          >
            Register as agent
          </button>
        </div>

     
      </div>
    </div>
  );
}