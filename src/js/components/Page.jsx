import React, { Component } from 'react';
import Card from './Card.jsx';
import ListItem from './ListItem.jsx';

export default class Page extends Component {
    render() {
        return (
            <div className="page">
                {
                    this.props.chapter.subchapters.map(subchapter => {
                        return (
                            <Card key={subchapter.title} title={subchapter.title}>
                                {
                                    subchapter.highlights.map((highlight, i) => {
                                        return (
                                            <ListItem key={`highlight-${i + 1}`}>{highlight}</ListItem>
                                        );
                                    })
                                }
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}