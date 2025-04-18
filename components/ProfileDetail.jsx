import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProfileDetail() {
  const { query: { id } } = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/profiles/${id}`).then(r=>r.json()).then(setProfile);
  }, [id]);

  if (!profile) return <p>Loading...</p>;
  const social = JSON.parse(profile.social || '{}');

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <img src={profile.photoURL} className="w-full h-64 object-cover mb-4 rounded" />
      <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
      <p>Bra: {profile.braSize} | Height: {profile.height} | Age: {profile.age}</p>
      <ul className="mt-4 space-y-1">
        <li>Bust: {profile.bust}"</li>
        <li>Waist: {profile.waist}"</li>
        <li>Hips: {profile.hips}"</li>
      </ul>
      <div className="mt-4">
        {Object.entries(social).map(([k,v])=>(
          <a key={k} href={v} className="mr-4 underline" target="_blank">{k}</a>
        ))}
      </div>
    </div>
  );
}