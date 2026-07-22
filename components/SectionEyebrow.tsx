export default function SectionEyebrow({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-500 mb-3">
      — {label}
    </p>
  );
}
