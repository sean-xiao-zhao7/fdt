export const dummyArticles: ArticleType[] = [
    {
        title: "Article 1",
        intro: "Intro to Article 1",
        body: "Body of article one",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        title: "Article 2",
        intro: "Intro to Article 2",
        body: "Body of article 2",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        title: "Article 3",
        intro: "Intro to Article 3",
        body: "Body of article 3",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        title: "Article 4",
        intro: "Intro to Article 4",
        body: "Body of article 4",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        title: "Article 5",
        intro: "Intro to Article 5",
        body: "Body of article 5",
        dateAdded: Date.now().toLocaleString(),
    },
];

export type ArticleType = {
    title: string;
    intro: string;
    body: string;
    dateAdded: string;
};
