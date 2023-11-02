import Button from '@mui/material/Button'

const ArticlePreview = ({ article }) => {
    const newTitle = article.title.split(". ").splice(0, 1).join("")

    return (
        <div id='article-wrapper'>
            <div>
                <h3>{newTitle}</h3>
            </div>
            <div id='news-auth-date'>
                <span>By: {article.author ? article.author : "N/A"}</span>
                <span id='news-date-span'>Date: {article.publishedAt.split("T")[0]}</span>
            </div>
            <div>
                {article.description !== "" ? (
                    <p>{article.description}</p>
                ) : (<p>No article description available</p>)}
            </div>
            <div>
                <a href={article?.url}>
                    <Button variant="contained" sx={{bgcolor: "purple"}}>Read More</Button>
                </a>
            </div>
        </div>
    )
}

export default ArticlePreview;
