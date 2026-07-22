export default function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
