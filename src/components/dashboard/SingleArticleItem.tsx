import { ArticleType } from "../../data/articles";

export default function SingleArticleListItem({
    article,
}: {
    article: ArticleType;
}) {
    return <li>{article.title}</li>;
}
