const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeProfile(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const name = $('h1').first().text().trim();
  const photoURL = $('.profile-photo img').attr('src');
  const details = {};

  $('.profile-details tr').each((i, el) => {
    const key = $(el).find('th').text().trim().toLowerCase();
    const val = $(el).find('td').text().trim();
    details[key] = val;
  });

  // Social links
  const social = {};
  $('.social-links a').each((i, el) => {
    const platform = $(el).attr('title').toLowerCase();
    social[platform] = $(el).attr('href');
  });

  return {
    name,
    photoURL,
    ...details,
    social,
  };
}

module.exports = { scrapeProfile };