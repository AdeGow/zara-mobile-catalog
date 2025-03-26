import MobilesGrid from './MobilesGrid';
import { fetchMobiles } from '../services/search';

export default async function MobilesPage() {
  const mobiles = await fetchMobiles();

  return (
    <div className="section-container">
      <MobilesGrid />
    </div>
  );
}
