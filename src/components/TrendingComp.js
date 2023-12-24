import React,{Component} from "react";
import { Card } from 'primereact/card';
import {Button} from 'primereact/button';
import {Avatar} from 'primereact/avatar';

export default class TrendingComp extends Component{
    render() {
        let {title, description, imageUrl, newsUrl, author, date, name } = this.props
        return (
            <>
             <div className="lg:w-full sm:w-full md:w-full h-auto p-4 flex lg:flex-row sm:flex-col justify-between items-center grid lg:grid-cols-5 xl:grid-cols-6 lg:gap-3 md:grid-cols-8 md:gap-8 my-16">
                <div className="image left-0 mx-auto lg:col-span-2 xl:col-span-3 md:col-span-4">
                    <img src={imageUrl} className="w-auto h-96 object-cover my-2"/>
                </div>
                <div className="flex flex-col lg:col-span-3 xl:col-span-3 md:col-span-4 mr-28 justify sm:ml-4">
                    <h1 className="text-left text-themeColor1 font-bold text-md">Trending</h1>
                    <h1 className="text-themeColor2 text-3xl font-bold leading-normal">{title}</h1>
                    <p  className="text-themeColor2 text-md font-bold leading-normal my-2">{description}</p>
                    <span className="lg:my-5 text-gray-600 text-md font-bold">By {author} | {new Date(date).toUTCString()}</span>
                    <a href={newsUrl} target="_blank"><Button label="Read More" className="my-2 px-6 py-3 bg-themeColor1 text-white hover:bg-themeColor2"/></a>
                </div>
            </div>
            <div className='max-w-screen bg-themeColor1 h-20 flex flex-row items-center justify-center hover:bg-themeColor2'>
                        <div className='w-52 bg-themeColor3 h-14 my-3 mx-8'>
                            <h1 className='text-left text-themeColor1 font-bold text-lg lg:my-3 md:my-2 lg:mx-4 md:mx-2 sm:mx-2 xl:mx-8 mx-3'>Breaking News</h1>
                        </div>
                        <div className="flex flex-col col-span-2 lg:mr-28 md:mr-16 justify">
                        <h1 className="text-themeColor3 text-2xl font-bold leading-normal">{title.slice(0,81)}</h1>
                        </div>
            </div>

            </>
        )
    }
}