import React, { Component } from 'react';
import NewsItemComp from './NewsItemComp';
import SpinnerComp from './SpinnerComp';
import TrendingComp from './TrendingComp';
import NewsComp from './NewsComp';
import CarouselComp from './CarouselComp';
import { Carousel } from 'primereact/carousel';

export default class HomeComp extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            category: 'general'
        }
        this.apiUrl = `https://newsapi.org/v2/top-headlines`;
    }

    async componentDidMount() {
        await this.topTrendArticle();

    }

    async topTrendArticle() {
        this.props.setProgress(10);
        const url = `${this.apiUrl}?category=${this.state.category}&country=us&apiKey=${this.props.apiKey}`
        console.log(url)
        const fetchedData = await fetch(url);
        this.setState({ loading: true })
        this.props.setProgress(40);
        const parsedData = await fetchedData.json();
        console.log(parsedData)
        this.props.setProgress(80);
        this.setState({
            articles: [parsedData.articles[0]],
            loading: false
        })
        this.props.setProgress(100)
    }

    render() {
        const filteredArticles = this.state.articles.filter(article => !article.title.includes('[Removed'))
        return (
            <>
                <div className='container w-full h-screen bg-themeColor3'>
                    {this.state.loading && <SpinnerComp />}
                    {!this.state.loading && <div className='content bg-themeColor3'>
                        {
                            filteredArticles.map((element) => (
                                <TrendingComp
                                    key={element.source.id}
                                    title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author ? element.author.slice(0, 10) : "Unknown"}
                                    date={element.publishedAt}
                                    name={element.source.name}
                                />
                            ))
                        }
                    </div>
                    }
                  {/* <CarouselComp/> */}
                    {/* <div className='w-full bg-themeColor1 h-20 bottom-0 flex flex-row'>
                        <div className='w-full bg-themeColor3 h-20 bottom-0 flex flex-row'>
                            <h1 className=''>Breaking News</h1>
                        </div>
                    </div> */}

                </div>
            </>
        )
    }
}