import Articleslist from "../components/ArticleList";
import articles from "./article-contant";
const ArticleListPage = () => {
    return (
        <>
        <Articleslist articles={articles}/>
        </>
        
    );
}

export default ArticleListPage;