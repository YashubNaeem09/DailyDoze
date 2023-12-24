import React, { Component } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import NewsItemComp from './NewsItemComp';

export default class CarouselComp extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            category: 'general'
        };
        this.apiUrl = 'https://newsapi.org/v2/top-headlines';
    }

    async componentDidMount() {
        await this.loadArticles();
    }

    async loadArticles() {
        const url = `${this.apiUrl}?category=${this.state.category}&country=us&apiKey=`;
        this.setState({ loading: true });
        const response = await fetch(url);
        const parsedData = await response.json();

        // Assuming parsedData.articles is an array of news articles
        this.setState({
            articles: parsedData.articles.slice(0, 6), // Get the first 6 articles
            loading: false,
        });
    }

    itemTemplate(article) {
        return (
            <div className='carousel-item'>
                <NewsItemComp
                    title={article.title}
                    description={article.description}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                />
            </div>
        );
    }

    render() {
        return (
            <div className='carousel-demo'>
                <div className='card'>
                    <Carousel value={this.state.articles} itemTemplate={this.itemTemplate} numVisible={3} numScroll={1} responsiveOptions={this.responsiveOptions} className='custom-carousel'>
                    </Carousel>
                </div>
            </div>
        );
    }
}
