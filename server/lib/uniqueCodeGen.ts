export const instituteCodeGen = (instituteName: string): string => {
  const normalizedName = instituteName.trim();
  const initials = normalizedName
    .split(/\s+/)
    .filter(Boolean)
    .map((item: string): string => item[0]?.toUpperCase() ?? "")
    .join("");

  const base = initials || normalizedName.slice(0, 4).toUpperCase();
  const suffix = Date.now().toString().slice(-4);

  return `${base}-${suffix}`;
};


 // teacher id or std id in format of [COLLEGE][YEAR][ROLE][SEQUENCE]

// Student: MRIT26S0421

// Employee: MRIT26E0015

export const GenTeacherId = (
  instituteCode: string,
  joinDate: Date = new Date(),
): string => {
  // Format join date as ddmmyy
  const dd = String(joinDate.getDate()).padStart(2, "0");
  const mm = String(joinDate.getMonth() + 1).padStart(2, "0");
  const yy = joinDate.getFullYear().toString().slice(-2);

  // Generate 3 random alphanumeric characters
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let random = "";
  for (let i = 0; i < 3; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `${instituteCode}-${dd}${mm}${yy}-${random}`;
};
