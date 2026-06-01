export default function FormInput({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  autoComplete,
  trailingIcon,
  error,
  ...rest
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-[16px] md:text-[18px] font-medium text-white">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error) || undefined}
          className={`w-full h-[58px] rounded-[8px] bg-[#232325] px-3.5 pr-12 text-[16px] md:text-[18px] text-white placeholder:text-[#8C8C8C] outline-none transition-colors focus:ring-1 focus:ring-accent ${
            error ? 'ring-1 ring-red-500/70' : ''
          }`}
          {...rest}
        />
        {trailingIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
            {trailingIcon}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
