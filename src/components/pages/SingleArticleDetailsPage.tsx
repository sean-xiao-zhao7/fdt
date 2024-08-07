import { useParams } from "react-router-dom";

export default function SingleArticleDetailsPage() {
    let { id } = useParams();

    return <>Single item page for {id}</>;
}
