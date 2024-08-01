export const dummyArticles: ArticleType[] = [
    {
        id: "art0",
        title: "Brunch this weekend?",
        intro: "A quick question",
        body: " I'll be in your neighborhood doing errands this…",
        author: "Ali Connors",
        imageURL: "/static/images/avatar/1.jpg",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        id: "art1",
        title: "Is homeschooling biblical?",
        intro: "Yes, homeschooling is biblical. A clunkier and more academic title for this article would be, “Discipleship, Education, and Schooling of Children: A Biblical Perspective.” I kind of like it but I am not writing for a philosophy journal right now. On the other hand, Christians must be scripturalists. That means, they must be philosophers because they must love wisdom.",
        body: "God’s Word, not the human experience. Where should Christians get wisdom? The Word of God. But very few – truly very few – Christians with whom I have ever talked about education start, travel, and end with God’s word when it comes to the education of children. Not church leaders, not parents, not professors of education at Christian colleges, and not certified teachers. But the Bible is where we must go on every topic. If only it were easier to do. What is “it”? How about trying to look at the word of God on a particular topic as if it were the first time, and as if you had not been biased by your family growing up, your local churches, your favorite Bible teachers, your friends of the past and present, your elementary and secondary school experiences, TV, and what all the experts say? It is not easy. But it is imperative that every Christian consider doing this on the topic of the discipleship of children. If not, a core aspect of what it means to live a Christian life is ignored and part of God’s best plan is lost. Historical context Many Christians try to come to terms with the education that is given to children and youth – about 86% of all children in the United States – in state-run (i.e., public) schools. (And the percentage of children in State/public schools in most nations is very high, the majority of children.) Some of these Christians have already sent their children away to public schools to be taught there, some are considering doing so, and some have grandchildren in them; others are church leaders who are trying to determine what counsel to give to parents about the education of their young. Along these lines, I saw an article by a nationally well-known Christian leader on this topic a few years back. I carefully read and thought long and hard about what he wrote. It was clear that he had struggled for years over the concept of who should be teaching, training, and indoctrinating children (i.e., educating them) and he was expressing himself to many thousands of people related to his sphere of influence. I had to conclude that his advice was murky and rife with historical, logical, biblical, and philosophical problems. I do not want to identify this man but I do want to give you some of what I wrote to him in a letter. First, from the very beginning, one of the main reasons for the founding and existence of “common schools” (i.e., what are now called public schools) in the United States was the control of one group of people (or one group’s vision) over another group of people. For example, historian of education Dr. Charles Glenn wrote the following: “In the United States, as in France and the Netherlands, the mission of the common school was defined largely in terms of the creation of convictions and loyalties, of shaping a common mind or soul for the nation” (p. 261). Homeschooling is biblical. It clearly allows and empowers and executes the biblical command for parents to raise up their children in the nurture and admonition of the Lord on a daily and hourly basis all week long.",
        author: "Travis Howard",
        imageURL: "/static/images/avatar/2.jpg",
        dateAdded: Date.now().toLocaleString(),
    },
    {
        id: "art2",
        title: "Don’t Genesis 1 and 2 present contradictory creation accounts?",
        intro: "Don’t Genesis 1 and 2 present contradictory creation accounts? No, they do not because they are intended to describe different things. God created day by day in Genesis 1, but Genesis 2 is a recap in a shorter version.",
        body: "Genesis 1 Day one – Heavens and earth are created. “Let there be light.” Day and Night. Day two – Atmospheric waters separated from earth waters. Day three – Land appears separating the seas. Vegetation is made. Day four – Sun, moon, stars are made. Day five – Sea life and birds are made. Day six – Land animals, creeping things, and man (male and female) are made. Genesis 2 States heaven and earth were created. There was no plant yet on earth, no rain yet, and no man. But, a mist rose watering the surface of the ground. Then the Lord formed man from dust of the ground and breagenesis creation 1 2thed into his nostrils the breath of life. Finally, God made Eve. There is no contradiction between Genesis 1 and 2. Genesis 1 is a detailed explanation of the six days of creation, day by day. Genesis two is a recap and a more detailed explanation of the sixth day, the day that Adam and Eve were made. The recap is stated in Gen. 2:4, “This is the account of the heavens and the earth when they were created, in the day that the Lord God made earth and heaven.” Then, Moses goes on to detail the creation of Adam and Eve as is seen in verses 7 through 24 of Gen. 2. Proof that it is not a creative account is found in the fact that animals aren’t even mentioned until after the creation of Adam. Why? Probably because their purpose was designated by Adam. They didn’t need to be mentioned until after Adam was created.",
        author: "Travis Howard",
        imageURL: "/static/images/avatar/2.jpg",
        dateAdded: Date.now().toLocaleString(),
    },
];

export type ArticleType = {
    id: string;
    title: string;
    intro: string;
    body: string;
    author: string;
    imageURL: string;
    dateAdded: string;
};
