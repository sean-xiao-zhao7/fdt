import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export default function SingleArticleDetailsPage() {
    const { id } = useParams();
    const currentArticle = useAppSelector((state) =>
        state.articles.articles.find((article) => id === article.id)
    );

    return <>Single item page for {currentArticle.title}</>;
}
