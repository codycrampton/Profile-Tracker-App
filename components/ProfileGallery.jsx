import { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

export default function ProfileGallery() {
  const [profiles, setProfiles] = useState([]);
  const [filter, setFilter] = useState({ real: 'all' });

  useEffect(() => {
    fetch('/api/profiles').then(r=>r.json()).then(setProfiles);
  }, []);

  const filtered = profiles.filter(p => filter.real==='all' ? true : p.real===(filter.real==='true'));

  return (
    <div>
      {/* Filters: toggle real/fictional, sort options, search */}
      <div className="flex gap-4 mb-4">
        <select onChange={e=>setFilter({ ...filter, real: e.target.value })} className="p-2 border rounded">
          <option value="all">All</option>
          <option value="true">Real</option>
          <option value="false">Fictional</option>
        </select>
        {/* TODO: add sort, search inputs */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(p => <ProfileCard key={p.id} profile={p} />)}
      </div>
    </div>
  );
}