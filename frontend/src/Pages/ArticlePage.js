import { useNavigate, useParams } from "react-router-dom";
import articles from "./article-contant";
import NotFoundPage from "./NotFoundpage";
import { useState, useEffect  } from "react";
import axios from 'axios';
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState ({upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const {articleId} = useParams();
    const {user,isLoding} = useUser();
    const article = articles.find(article => article.name ===articleId);
    const navigate = useNavigate();
    console.log(user);
    console.log(isLoding);
    console.log(canUpvote);
    useEffect(() =>{
        // console.log(isLoding,user)
        const loadArticleInfo = async () =>{
            const token = user && await user.getIdToken();
            const headers =token ? {authtoken: token} : {} ;
            const response = await axios.get(`/api/articles/${articleId}`, {headers});
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        if (isLoding){
            loadArticleInfo();
        }    
    }, [isLoding, user])
    const addUpvote = async () =>{
        const token = user && await user.getIdToken();
        const headers =token ? {authtoken: token} : {} ;
        
        const response = await axios.put(`/api/articles/${articleId}/upvote`,null ,{headers})
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
                ? <button onClick={addUpvote}>{canUpvote ? 'upvote' : 'Already Upvoted'} upvote</button>
                : <button onClick={()=>{navigate('/login') }}>Log in to upvote</button>}
            <p>This article has{articleInfo.upvotes} upvote(s)</p>
        </div>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        {user 
            ?<AddCommentForm 
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            :<button onClick={()=>{navigate('/login') }}>Log in to add a comment</button>}
            <CommentsList comments={articleInfo.comments} />
        </>
        
    );
}

export default ArticlePage;