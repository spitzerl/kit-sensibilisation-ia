import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export default defineEventHandler(async (event) => {
  const rssUrl = 'https://news.google.com/rss/search?q=inteligence%20artificielle%22&hl=fr&gl=FR&ceid=FR:fr';
  
  try {
    const response = await fetch(rssUrl);

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('xml') && !contentType.includes('rss')) {
      console.error('Le contenu récupéré n\'est pas du XML:', contentType);
      return { error: 'Le flux récupéré n\'est pas du XML valide' };
    }

    let xmlData = await response.text();

    xmlData = xmlData.trim().replace(/^[^<]+/, '');

    const parsedData = await parseStringPromise(xmlData);

    let articles = parsedData.rss.channel[0].item.map(item => ({
      title: item.title[0],
      link: item.link[0],
      description: item.description[0],
      pubDate: new Date(item.pubDate[0]),
    }));

    articles = articles.sort((a, b) => b.pubDate - a.pubDate).slice(0, 10);

    return articles;
  } catch (error) {
    console.error('Erreur de récupération du flux RSS ou format inattendu:', error);
    return { error: 'Erreur de récupération du flux RSS' };
  }
});
