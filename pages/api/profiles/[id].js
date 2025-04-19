import db from '../../../db';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const row = db.prepare('SELECT * FROM profiles WHERE id = ?').get(id);
    return res.status(200).json(row);
  }
  if (req.method === 'PUT') {
    const keys = Object.keys(req.body);
    const sets = keys.map(k => `${k} = @${k}`).join(', ');
    db.prepare(`UPDATE profiles SET ${sets} WHERE id = @id`).run({ id, ...req.body });
    return res.status(200).json({ id, ...req.body });
  }
  if (req.method === 'DELETE') {
    db.prepare('DELETE FROM profiles WHERE id = ?').run(id);
    return res.status(204).end();
  }
  res.setHeader('Allow', ['GET','PUT','DELETE']);
  res.status(405).end();
}
