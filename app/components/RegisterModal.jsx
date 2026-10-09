import { useState } from "react";
import { X, Link2, User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    referral: "",
    loginId: "",
    fullName: "",
    email: "",
    mobile: "",
    agency: "",
    password: "",
    confirm: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171A1C]/60 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F4ED] rounded-2xl w-full max-w-2xl relative shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide border border-[#59636B]/15 p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#59636B] hover:text-[#171A1C] p-1.5 rounded-full hover:bg-[#59636B]/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-[#171A1C] mb-1">Create your account</h2>
        <p className="text-xs text-[#59636B] mb-6">
          Join Divine Bricks as a property agent — it only takes a minute.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Referral */}
          <div>
            <p className="text-[10px] font-bold text-[#59636B] tracking-widest mb-2">
              REFERRAL
            </p>
            <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
              Sponsor / Referral ID
            </label>
            <div className="relative">
              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
              <input
                name="referral"
                value={form.referral}
                onChange={handleChange}
                placeholder="Referral code or sponsor User ID"
                className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-[#59636B] tracking-widest">PROFILE</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
                  Login User ID <span className="text-[#F5A623]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    name="loginId"
                    value={form.loginId}
                    onChange={handleChange}
                    placeholder="Choose a unique login ID"
                    className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
                  Full name <span className="text-[#F5A623]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
                  Email <span className="text-[#F5A623]">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">Mobile</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="+971..."
                    className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">Agency / Skype</label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    name="agency"
                    value={form.agency}
                    onChange={handleChange}
                    placeholder="Brokerage or Skype ID"
                    className="w-full h-11 pl-10 pr-3 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-[#59636B] tracking-widest">SECURITY</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
                  Password <span className="text-[#F5A623]">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Min. 6 character"
                    className="w-full h-11 pl-10 pr-9 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#59636B]"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-[#171A1C] block mb-1.5">
                  Confirm <span className="text-[#F5A623]">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59636B]" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="Repeat password"
                    className="w-full h-11 pl-10 pr-9 border border-[#59636B]/25 rounded-xl text-sm bg-white text-[#171A1C] placeholder-[#59636B]/60 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#59636B]"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold rounded-xl hover:shadow-lg hover:shadow-[#F5A623]/40 transition-all active:scale-[0.98]"
          >
            Create agent account
          </button>
        </form>

        <div className="text-center text-xs mt-5 pt-4 border-t border-[#59636B]/15">
          <span className="text-[#59636B]">Already have an account? </span>
          <button onClick={onSwitchToLogin} className="text-[#F5A623] font-bold hover:underline">
            Sign in
          </button>
        </div>

        <div className="text-center text-[11px] mt-3 text-[#59636B]">
          <button className="hover:text-[#F5A623] font-medium">← Back to website</button>
        </div>
      </div>
    </div>
  );
}