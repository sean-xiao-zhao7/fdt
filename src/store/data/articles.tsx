export const dummyArticles: ArticleType[] = [
    {
        title: "Brunch this weekend?",
        intro: "A quick question",
        body: " I'll be in your neighborhood doing errands this…",
        author: "Ali Connors",
        imageURL: "/static/images/avatar/1.jpg",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        title: "Summer BBQ",
        intro: "to Scott, Alex, Jennifer",
        body: " — Wish I could come, but I'm out of town this…",
        author: "Travis Howard",
        imageURL: "/static/images/avatar/2.jpg",
        dateAdded: Date.now().toLocaleString(),
    },
];

export type ArticleType = {
    title: string;
    intro: string;
    body: string;
    author: string;
    imageURL: string;
    dateAdded: string;
};
