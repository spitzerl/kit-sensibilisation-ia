import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

export default defineEventHandler(async (event) => {
	const rssUrl = "https://rss.app/feeds/tOaRywWOt0KHLNoU.xml";

	try {
		const response = await fetch(rssUrl);
		const contentType = response.headers.get("content-type") || "";
		if (!contentType.includes("xml") && !contentType.includes("rss")) {
			console.error("Le contenu récupéré n'est pas du XML:", contentType);
			return { error: "Le flux récupéré n'est pas du XML valide" };
		}

		let xmlData = await response.text();
		xmlData = xmlData.trim().replace(/^[^<]+/, "");

		const parsedData = await parseStringPromise(xmlData);

		// Filtrer les articles dont le lien contient "dailymotion.com"
		const filteredItems = parsedData.rss.channel[0].item.filter((item) => {
			const link = item.link[0];
			return !link.includes("dailymotion.com");
		});

		const articles = filteredItems.map((item) => {
			let description = item.description[0];
			const imageUrl = item["media:content"] ? item["media:content"][0].$.url : item["content:image"] ? item["content:image"][0] : item.enclosure ? item.enclosure[0].$.url : null;

			// Supprimez les balises <img> et <div> de la description
			description = description.replace(/<img[^>]*>/g, "").replace(/<\/?div[^>]*>/g, "");

			return {
				title: item.title[0],
				link: item.link[0],
				description: description,
				pubDate: new Date(item.pubDate[0]),
				image: imageUrl,
			};
		});

		return articles;
	} catch (error) {
		console.error("Erreur de récupération du flux RSS ou format inattendu:", error);
		return { error: "Erreur de récupération du flux RSS" };
	}
});
