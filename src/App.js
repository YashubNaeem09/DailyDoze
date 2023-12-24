import React, { Component } from 'react'
import NavbarComp from './components/NavbarComp'
import NewsComp from './components/NewsComp'
import LoadingBar from 'react-top-loading-bar';
import HomeComp from './components/HomeComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    progress: 0,
  }
  setProgress = (Progress) => {
    this.setState({ progress: Progress })
  }
  apiKey = '0e59cf96638847c68af724b498498052'
  render() {
    return (
      <div className='bg-themeColor3'>
        <Router>
          <NavbarComp />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<><HomeComp apiKey={this.apiKey} setProgress={this.setProgress}/></>}></Route>
            {/* <Route exact path="/news" element={<><NewsComp setProgress={this.setProgress} apiKey={this.apiKey} /></>}></Route> */}
          </Routes>
          <NewsComp apiKey={this.apiKey} setProgress={this.setProgress}/>
        </Router>
      </div>
    )
  }
}




// https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=5f32c78e49e24600a5dd921efa6f8a23