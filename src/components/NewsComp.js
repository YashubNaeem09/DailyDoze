import React, { Component } from 'react';
import { Paginator } from 'primereact/paginator';
import { ScrollTop } from 'primereact/scrolltop';
import NewsItemComp from './NewsItemComp';
import SpinnerComp from './SpinnerComp';
import CategoryComp from './CategoryComp';
import { Carousel } from 'primereact/carousel';

export default class NewsComp extends Component {
    constructor() {
        super();
        this.state = {
            first: 0,
            articles: [],
            loading: false,
            currentPage: 1,
            totalRecords: 0,
            category: 'general',
            carouselItem: []
        };
        this.itemsPerPage = 21;
        this.apiUrl = `https://newsapi.org/v2/top-headlines`;
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }

    async componentDidMount() {
        await this.loadArticles(this.state.currentPage);
    }

    async loadArticles(page) {
        this.props.setProgress(10);
        const url = `${this.apiUrl}?category=${this.state.category}&country=us&apiKey=${this.props.apiKey}&page=${page}`;
        this.setState({ loading: true })
        const response = await fetch(url);
        this.props.setProgress(40);
        const parsedData = await response.json();
        this.props.setProgress(80);
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalRecords: parsedData.totalResults,
            currentPage: page,
            loading: false,
            // carouselItem: parsedData.articles.slice(0, 6)
        });
        this.props.setProgress(100)
    }

    onPageChange = async (event) => {
        await this.loadArticles(event.page + 1); // Page starts from 0 in Paginator
    };

    handleCategoryChange = (CategoryName) => {
        this.props.setProgress(0)
        this.setState({ category: CategoryName }, () => {
            this.loadArticles(1);
            document.title = `${this.state.category} | Daily Dose`
        })
        this.props.setProgress(100)
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
        const filteredArticles = this.state.articles.filter(article => !article.title.includes('[Removed]'))

        return (
            <div className="mx-auto bg-themeColor3">
                {this.state.loading && <SpinnerComp />}
                {!this.state.loading && <div className='content'>
                    {/* <h1 className="text-3xl font-bold text-gray-800 text-center">Top Headlines</h1> */}
                    <CategoryComp onCategoryChange={this.handleCategoryChange} />
                    <div className="flex flex-wrap">
                        {filteredArticles.map((element) => (
                            <NewsItemComp
                                key={element.source.id}
                                title={element.title ? element.title.slice(0, 90) : ''}
                                description={element.description ? element.description.slice(0, 155) : 'None'}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author ? element.author.slice(0, 10) : "Unknown"}
                                date={element.publishedAt}
                                name={element.source.name}
                            />
                        ))}
                    </div>
                    {/* <div className='flex justify-center'>
                    <Button label="Read More" className="my-2 px-6 py-3 bg-themeColor1 text-white hover:bg-themeColor2"/>
                    </div> */}
                    <ScrollTop className='bg-gray-800 hover:bg-themeColor1' />
                    {this.state.totalRecords > 0 && (<Paginator
                        className='bg-themeColor3 text-themeColor2'
                        first={(this.state.currentPage - 1) * this.itemsPerPage}
                        rows={this.itemsPerPage}
                        totalRecords={this.state.totalRecords}
                        onPageChange={this.onPageChange}
                    />)}
                </div>}
                {/* <div className='carousel w-1/2 h-auto'>
                    <Carousel className='custom-carousel' value={this.state.articles} numScroll={3} numVisible={3} 
                    responsiveOptions={this.responsiveOptions} circular autoplayInterval={3000} itemTemplate={this.itemTemplate}/>
                </div> */}
                <div className='footer max-w-screen h-48 bg-themeColor2 grid grid-col-1'>
                    <div className='flex flex-row lg:justify-center md:justify-start'>
                        <div className='row1 col-span-3 md:ml-3'>
                            <h1 className="lg:text-4xl md:text-2xl italic font-bold text-themeColor3 cursor-pointer lg:mt-16 md:mt-12 my-3 hover:text-themeColor1">Daily Dose</h1>
                            <span className='text-sm font-md text-themeColor3 lg:-ml-1'>Copyright <i className='pi pi-info-circle'></i> 2023 | DailyDose </span>
                        </div>
                        <div className='row2 flex flex-col col-span-1 lg:ml-24 md:ml-8'>
                            <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer lg:mt-16 md:mt-12">Privacy Policy</h1>
                            <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer ">Do not sell my personal info</h1>
                            <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer ">Terms of services</h1>
                            <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer ">dailydose.com Site Map</h1>
                        </div>
                        <div className='row3 flex flex-col justify-between col-span-1 lg:ml-28 md:ml-8'>
                            <div className='subrow1 flex flex-row justify-between'>
                                <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer mt-16 ml-6">About</h1>
                                <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer mt-16 ml-6">Contact</h1>
                                <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer mt-16 ml-6">Careers</h1>
                                <h1 className="text-md italic font-bold text-themeColor3 cursor-pointer mt-16 ml-6">Coupuns</h1>
                            </div>
                            <div className='subrow2 flex flex-row justify-between'>
                            <h1 className="text-2xl italic font-bold text-themeColor3 cursor-pointer mb-8 ml-8"><i className='text-2xl pi pi-wifi'></i></h1>
                            <h1 className="text-2xl italic font-bold text-themeColor3 cursor-pointer mb-14 ml-8"><i className='text-2xl pi pi-facebook'></i></h1>
                            <h1 className="text-2xl italic font-bold text-themeColor3 cursor-pointer mb-14 ml-8"><i className='text-2xl pi pi-twitter'></i></h1>
                            <h1 className="text-2xl italic font-bold text-themeColor3 cursor-pointer mb-14 "><i className='text-2xl pi pi-discord'></i></h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
