import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/features/auth/AuthLayout.jsx';
import FormInput from '@/components/features/auth/FormInput.jsx';
import { ROUTES } from '@/constants/routes.js';
import { useAuth } from '@/context/AuthContext.jsx';

const INITIAL_FORM = { email: '', username: '', password: '', confirmPassword: '' };

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (submitError) setSubmitError('');
  };

  const validate = () => {
    const next = {};
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.username.trim()) next.username = 'Username is required';
    if (!form.password) next.password = 'Password is required';
    else if (form.password.length < 8) next.password = 'Must be at least 8 characters';
    if (!form.confirmPassword) next.confirmPassword = 'Please confirm your password';
    else if (form.confirmPassword !== form.password) next.confirmPassword = 'Passwords do not match';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const result = register({
      email: form.email,
      username: form.username,
      password: form.password,
    });
    if (result.ok) {
      navigate(ROUTES.HOME, { replace: true });
    } else {
      setSubmitError(result.error);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-none capitalize">
        Create Account
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
          label="Email*"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          autoComplete="email"
          error={errors.email}
        />

        <FormInput
          label="Username*"
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          placeholder="Choose a username"
          autoComplete="username"
          error={errors.username}
        />

        <FormInput
          label="Password*"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          autoComplete="new-password"
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

        <FormInput
          label="Confirm Password*"
          name="confirmPassword"
          type={showConfirm ? 'text' : 'password'}
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          autoComplete="new-password"
          error={errors.confirmPassword}
          trailingIcon={
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="grid place-items-center h-6 w-6 text-text-muted hover:text-white transition-colors"
              aria-label={showConfirm ? 'Hide password' : 'Show password'}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          }
        />

        <button
          type="submit"
          className="relative w-full h-[58px] rounded-[10px] bg-[#7717FF] hover:bg-[#8a30ff] text-[18px] md:text-[20px] font-semibold text-white transition-colors shadow-[inset_0_-4px_16px_rgba(238,238,238,0.04),inset_0_4px_16px_rgba(238,238,238,0.04),0_8px_24px_rgba(119,23,255,0.35)] focus-visible:ring-2 focus-visible:ring-accent-soft"
        >
          Create Account
        </button>
      </form>

      <p className="mt-8 text-center text-sm md:text-[15px] text-text-muted">
        Already have an account?{' '}
        <Link
          to={ROUTES.LOGIN}
          className="text-accent-soft hover:text-white font-semibold transition-colors"
        >
          Log In
        </Link>
      </p>
    </AuthLayout>
  );
}
