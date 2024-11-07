import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

export default defineEventHandler(async (event) => {
	const rssUrl = "https://news.google.com/rss/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNRzFyZWhJQ1puSW9BQVAB?hl=fr&gl=FR&ceid=FR%3Afr";

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

		const articles = parsedData.rss.channel[0].item.map((item) => {
			let description = item.description[0];
			const imageUrl = item["media:content"] ? item["media:content"][0].$.url : item["content:image"] ? item["content:image"][0] : item.enclosure ? item.enclosure[0].$.url : null;

			// Supprimez les balises <img> et <div> de la description
			description = description.replace(/<img[^>]*>/g, "").replace(/<\/?div[^>]*>/g, "");

			// Formatez la date au format jj/mm/yyyy
			const date = new Date(item.pubDate[0]).toLocaleDateString("fr-FR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});

			return {
				title: item.title[0],
				link: item.link[0],
				description: description,
				image: imageUrl,
				date: date, // Utilisez la date formatée
			};
		});

		return articles;
	} catch (error) {
		console.error("Erreur de récupération du flux RSS ou format inattendu:", error);
		return { error: "Erreur de récupération du flux RSS" };
	}
});
