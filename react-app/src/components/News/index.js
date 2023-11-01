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

        const response = await fetch('https://api.currentsapi.services/v1/search?keywords=Programming&language=en&apiKey=04_KVypNdOPrQN72jq6kWvw5lnxzUWYKHvh2lFknQfKXzKM3',
        {
            method: "GET",
            mode: 'no-cors'
        })

        if(response.ok) {
            const data = await response.json()
            setNewsData(data.news)
            setLoaded(true)
            return
        } else {
            setFetchError("Oopsies! Currents News API experienced a server issue during fetching. Check back later!")
            setLoaded(true)
            return
        }
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
                        {(!fetchError && loaded) && newsData?.map(article => (
                            <ArticlePreview article={article} />
                        ))}
                    </div>
                </section>
            </Box>
        </Box>
    )
}

export default NewsPage;
