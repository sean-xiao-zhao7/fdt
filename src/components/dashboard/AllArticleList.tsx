import { ArticleType } from "../../store/data/articles";
import SingleArticleListItem from "./SingleArticleItem";

export default function AllArticleList({
    articles,
}: {
    articles: ArticleType[];
}) {
    return (
        <ul>
            {articles.map((article) => {
                return <SingleArticleListItem article={article} />;
            })}
        </ul>
    );
}
