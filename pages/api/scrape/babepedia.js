import { scrapeBabepediaProfile } from '../../../lib/babepedia';

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const data = await scrapeBabepediaProfile(id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}