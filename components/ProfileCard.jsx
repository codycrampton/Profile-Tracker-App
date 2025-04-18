import Link from 'next/link';

export default function ProfileCard({ profile }) {
  return (
    <Link href={`/profiles/${profile.id}`}>
      <a className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img src={profile.photoURL} alt={profile.name} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <p className="text-sm">Bra: {profile.braSize}</p>
          <p className="text-sm">Bust: {profile.bust}"</p>
        </div>
      </a>
    </Link>
  );
}