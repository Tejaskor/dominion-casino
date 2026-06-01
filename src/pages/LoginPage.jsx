import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/features/auth/AuthLayout.jsx';
import FormInput from '@/components/features/auth/FormInput.jsx';
import { ROUTES } from '@/constants/routes.js';
import { useAuth } from '@/context/AuthContext.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ user: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.user.trim()) next.user = 'Email or username is required';
    if (!form.password) next.password = 'Password is required';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const result = login({ identifier: form.user, password: form.password });
    if (result.ok) {
      navigate(ROUTES.HOME, { replace: true });
    } else {
      setSubmitError(result.error);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-none capitalize">
        Welcome Back
      </h2>

      {submitError && (
        <div
          role="alert"
          className="mt-6 rounded-[8px] border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
        <FormInput
          label="Email or Username*"
          name="user"
          type="text"
          value={form.user}
          onChange={handleChange}
          placeholder="Enter email or username"
          autoComplete="username"
          error={errors.user}
        />

        <div className="space-y-2">
          <FormInput
            label="Password*"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="current-password"
            error={errors.password}
            trailingIcon={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="grid place-items-center h-6 w-6 text-text-muted hover:text-white transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm md:text-[16px] text-accent-soft hover:text-white transition-colors"
            >
              Forget Password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="relative w-full h-[58px] rounded-[10px] bg-[#7717FF] hover:bg-[#8a30ff] text-[18px] md:text-[20px] font-semibold text-white transition-colors shadow-[inset_0_-4px_16px_rgba(238,238,238,0.04),inset_0_4px_16px_rgba(238,238,238,0.04),0_8px_24px_rgba(119,23,255,0.35)] focus-visible:ring-2 focus-visible:ring-accent-soft"
        >
          Log In
        </button>
      </form>

      <p className="mt-8 text-center text-sm md:text-[15px] text-text-muted">
        Don&rsquo;t have an account?{' '}
        <Link
          to={ROUTES.REGISTER}
          className="text-accent-soft hover:text-white font-semibold transition-colors"
        >
          Register Now
        </Link>
      </p>
    </AuthLayout>
  );
}
