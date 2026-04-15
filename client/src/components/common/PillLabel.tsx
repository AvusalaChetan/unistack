type PillLabelProps = {
  text: string;
  className?: string;
};

const PillLabel = ({text, className = ""}: PillLabelProps) => {
  return (
    <div
      className={` inline-flex items-center justify-center border border-(--accent-secondary) px-6 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-(--accent-primary) ${className}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default PillLabel;
