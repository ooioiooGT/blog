import Articleslist from "../components/ArticleList";
import articles from "./article-contant";
const ArticleListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <Articleslist articles={articles}/>
        </>
        
    );
}

export default ArticleListPage;