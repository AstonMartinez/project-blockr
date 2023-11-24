import { useEffect, useState } from "react"
import ArticlePreview from "./ArticlePreview"
import NavDrawer from "../NavDrawer"
import * as React from 'react'
import Box from '@mui/material/Box';
import './News.css'
import LoadingScreen from "../LoadingScreen";

const NewsPage = () => {
    const [newsData, setNewsData] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [fetchError, setFetchError] = useState('')

    const fetchNews = async () => {

        const apiUrl = 'https://newsapi.org/v2/everything?q=software+engineering&apiKey=69a664a8204544579e5d5b80d11a8ccc';
        const proxyUrl = 'https://project-blockr.onrender.com/news';

        fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        // const response = await fetch('https://newsapi.org/v2/everything?q=software+engineering&apiKey=69a664a8204544579e5d5b80d11a8ccc')

    //     if(response.ok) {
    //         const data = await response.json()
    //         setNewsData(data.articles)
    //         setLoaded(true)
    //         return
    //     } else {
    //         const errors = await response.json()
    //         setFetchError(errors)
    //         setLoaded(true)
    //         return
    //     }
    }

    useEffect(() => {
        fetchNews()
    }, [])


    return (
        <Box sx={{ display: 'flex' }}>
            <NavDrawer page={'News'} />
            <Box component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    marginTop: "70px"
            }}>
                {!loaded && (
                    <LoadingScreen />
                )}
                <section id='news-page-wrapper'>
                    <div>
                        <h1>What's Happening In Tech</h1>
                    </div>
                    <div>
                        {fetchError && (
                            <h3>{fetchError}</h3>
                        )}
                        {(!fetchError && loaded && newsData) && newsData?.map(article => (
                            <ArticlePreview article={article} />
                        ))}
                    </div>
                </section>
            </Box>
        </Box>
    )
}

export default NewsPage;
