import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <div className="list-item">
                <span className="list-item__text">{this.capitalise(this.props.children)}</span>
            </div>
        );
    }

    capitalise(text) {
        return text[0].toUpperCase() + text.substring(1);
    }
}