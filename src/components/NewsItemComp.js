import React, { Component } from "react";
import { Card } from 'primereact/card';
import {Button} from 'primereact/button';
import {Avatar} from 'primereact/avatar';
import {Badge} from 'primereact/badge'

export default class NewsItemComp extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, name } = this.props
        return (
            <div className="lg:w-1/3 sm:w-1/2 h-auto p-4">
                
                <Card className="bg-white" style={{ height: '100%' }}>
                    <header>
                    <Badge value={name} className="bg-themeColor1"></Badge>
                        <img alt="Card" src={imageUrl} className="w-full h-48 object-cover my-2"/>
                        <h1 className="text-themeColor2 text-lg font-bold leading-normal">{title}</h1>
                        {/* <span className="my-2 text-md font-bold"><Avatar icon="pi pi-user" shape="circle" className="mr-2"/>By {author} at {new Date(date).toUTCString()} </span> */}
                    </header>
                    <p className="mt-2 text-black mb-4">
                        {description}....
                    </p>
                    <div className="flex flex-row justify-between">
                    <span className="text-gray-600 text-md font-bold my-2">By {author} | {new Date(date).toLocaleDateString()}</span>
                    <a href={newsUrl} target="_blank"><Button label="Read More" severity="secondary" className="px-6 py-3 bg-themeColor1 hover:bg-themeColor2 text-white"/></a>
                    </div>
                    {/* <footer className="my-2">
                        <a href={newsUrl} target="_blank"><Button label="Read More" severity="secondary" className="px-6 py-3 bg-themeColor1 hover:bg-themeColor2 text-white"/></a>
                    </footer> */}
                </Card>
            </div>
        )
    }
}