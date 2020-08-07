import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <span className="card__title">{this.props.title}</span>
                {this.props.children}
            </div>
        );
    }
}