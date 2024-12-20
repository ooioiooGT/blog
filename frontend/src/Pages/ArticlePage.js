import { useParams } from "react-router-dom";
import articles from "./article-contant";
import NotFoundPage from "./NotFoundpage";
import { useState, useEffect  } from "react";
import axios from 'axios';
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState ({upvotes: 0, comments: []});
    const {articleId} = useParams();
    const {user,isLoding} = useUser();
    const article = articles.find(article => article.name ===articleId);
    useEffect(() =>{
        const loadArticleInfo = async () =>{
            const response = await axios.get(`/api/articles/${articleId}`)
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();

    }, [])
    const addUpvote = async () =>{
        const response = await axios.put(`/api/articles/${articleId}/upvote`)
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }
    if (!article){
        return <NotFoundPage />
    }
    return (
        <>
        <h1>{article.title}</h1>
        <div className="upvote-section">
            {user
                ? <button onClick={addUpvote}>upvote</button>
                : <button >Log in to upvote</button>}
            <p>This article has{articleInfo.upvotes} upvote(s)</p>
        </div>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        {user 
            ?<AddCommentForm 
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            :<button>Log in to add a comment</button>}
            <CommentsList comments={articleInfo.comments} />
        </>
        
    );
}

export default ArticlePage;