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

    const fetchNews = async () => {

        const response = await fetch('https://api.currentsapi.services/v1/search?keywords=Programming&language=en&apiKey=04_KVypNdOPrQN72jq6kWvw5lnxzUWYKHvh2lFknQfKXzKM3')

        if(response.ok) {
            const data = await response.json()
            setNewsData(data.news)
            setLoaded(true)
        }

        // const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69a664a8204544579e5d5b80d11a8ccc')
        // if (response.ok) {
        //     const data = await response.json()
        //     setNewsData(data.articles)
        //     setLoaded(true)
        //     console.log(newsData)
        // }
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
                        {loaded && newsData?.map(article => (
                            <ArticlePreview article={article} />
                        ))}
                    </div>
                </section>
            </Box>
        </Box>
    )
}

export default NewsPage;
