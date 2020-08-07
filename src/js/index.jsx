import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import highlights from './Starting Strength Highlights.json';

import AppBar from './components/AppBar.jsx';
import Page from './components/Page.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentChapter: 0,
            showMenu: false
        };
    }

    render() {
        return (
            <div>
                <AppBar 
                    onMenuClick={() => this.onAppBarMenuClick()} 
                    onLinkClick={chapter => this.onAppBarLinkClick(chapter)} 
                    showMenu={this.state.showMenu}
                    page={highlights.chapters[this.state.currentChapter].title}/>

                <main className="main">
                    <Page chapter={highlights.chapters[this.state.currentChapter]}/>
                </main>
            </div>
        );
    }

    onAppBarMenuClick() {
        this.setState(state => {
            return {
                showMenu: !state.showMenu
            }
        });
    }

    onAppBarLinkClick(chapterTitle) {
        const chapterIndex = highlights.chapters.findIndex(chapter => chapter.title === chapterTitle);
        this.setState({
            currentChapter: chapterIndex,
            showMenu: false
        });
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));