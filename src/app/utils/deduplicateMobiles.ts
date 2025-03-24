import { Mobile } from '../interfaces/mobileType';

export const deduplicateMobiles = (mobiles: Mobile[]): Mobile[] => {
  const seen = new Set<string>();
  return mobiles.filter((mobile) => {
    const id = mobile.id.trim().toLowerCase();
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};
