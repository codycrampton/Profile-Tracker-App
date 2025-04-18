const { scrapeProfile } = require('./scraper');

async function scrapeBabepediaProfile(id) {
  const url = `https://babepedia.com/profiles/${id}`;
  return await scrapeProfile(url);
}

async function scrapeFandomProfile(path) {
  // e.g. /wiki/Komoe_Harumachi
  const url = `https://eiken.fandom.com${path}`;
  return await scrapeProfile(url);
}

module.exports = { scrapeBabepediaProfile, scrapeFandomProfile };