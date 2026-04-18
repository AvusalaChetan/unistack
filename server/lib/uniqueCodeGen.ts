export const instituteCodeGen = (instituteName: string): string => {
  const normalizedName = instituteName.trim();
  const initials = normalizedName
    .split(/\s+/)
    .filter(Boolean)
    .map((item: string): string => item[0]?.toUpperCase() ?? "")
    .join("");

  const base = initials || normalizedName.slice(0, 4).toUpperCase();
  const suffix = Date.now().toString().slice(-4);

  return `${base}${suffix}`;
};
