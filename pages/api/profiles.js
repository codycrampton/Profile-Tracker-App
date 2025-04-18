import db from '../../db';
import { v4 as uuid } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const rows = db.prepare('SELECT * FROM profiles').all();
    return res.status(200).json(rows);
  }
  if (req.method === 'POST') {
    const id = uuid();
    const payload = { id, ...req.body };
    db.prepare(`INSERT INTO profiles (id,name,real,braSize,height,age,bust,waist,hips,photoURL,sourceURL,notes,social)
                VALUES (@id,@name,@real,@braSize,@height,@age,@bust,@waist,@hips,@photoURL,@sourceURL,@notes,@social)
               `).run(payload);
    return res.status(201).json(payload);
  }
  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end();
}