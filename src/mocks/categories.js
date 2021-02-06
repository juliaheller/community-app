const categories = [
	{
		id: 1,
		name: "Orga & Planung",
		image:
			"https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_960_720.png",
	},
	{
		id: 2,
		name: "Diskussion & Abstimmung",
		image:
			"https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_960_720.png",
	},
	{
		id: 3,
		name: "Persönliches",
		image:
			"https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
	},
	{
		id: 4,
		name: "Ankündigungen",
		image:
			"https://cdn.pixabay.com/photo/2016/06/26/12/05/megaphone-1480342_960_720.jpg",
	},
];

const posts = [
	{
		id: 1,
		category: categories[0].id,
		title: "Naechstes Treffen",
		content:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		createdAt: 123423434,
		createdBy: {
			surname: "Julia",
			name: "Heller",
			avatar:
				"https://phantastisch-lesen.com/wp-content/uploads/2018/02/Julia-Heller500.jpg",
		},
	},
	{
		id: 2,
		category: categories[1].id,
		title: "Ritualtracht Abstimmung",
		content:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		createdAt: 123423434,
		createdBy: {
			surname: "Julia",
			name: "Heller",
			avatar:
				"https://phantastisch-lesen.com/wp-content/uploads/2018/02/Julia-Heller500.jpg",
		},
	},
	{
		id: 3,
		category: categories[2].id,
		title: "Brauche Hilfe bei Entscheidung",
		content:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		createdAt: 123423434,
		createdBy: {
			surname: "Julia",
			name: "Heller",
			avatar:
				"https://phantastisch-lesen.com/wp-content/uploads/2018/02/Julia-Heller500.jpg",
		},
	},
	{
		id: 3,
		category: categories[3].id,
		title: "Neue Funktion im Forum",
		content:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		createdAt: 123423434,
		createdBy: {
			surname: "Julia",
			name: "Heller",
			avatar:
				"https://phantastisch-lesen.com/wp-content/uploads/2018/02/Julia-Heller500.jpg",
		},
	},
];

export { categories, posts };
