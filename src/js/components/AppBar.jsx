import React, { Component } from 'react';
import highlights from '../Starting Strength Highlights.json';

export default class AppBar extends Component {
    render() {
        return (
            <div className="app-bar">
                <div className="app-bar__top">
                    <div>
                        <span className="app-bar__title">MySS{` - ${this.props.page}`}</span>
                    </div>

                    <div className="app-bar__right">
                        <span className="app-bar__menu" onClick={() => this.onMenuClick()}>Menu</span>
                    </div>
                </div>
                {
                    this.props.showMenu &&
                    <div className="app-bar__links">
                        {
                            highlights.chapters.map(chapter => {
                                return (
                                    <div key={chapter.title} className="app-bar__page" onClick={() => this.onLinkClick(chapter.title)}>
                                        {chapter.title}
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }

    onMenuClick() {
        if(this.props.onMenuClick) {
            this.props.onMenuClick();
        }
    }

    onLinkClick(chapter) {
        if(this.props.onLinkClick) {
            this.props.onLinkClick(chapter);
        }
    }
}