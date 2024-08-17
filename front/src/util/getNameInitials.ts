export const getNameInitials = (name: string) => {
  const parts = name.split(/\s+/);
  const initials = parts.map((part) => part.charAt(0).toUpperCase()).join("");
  return initials.substring(0, 2);
};
