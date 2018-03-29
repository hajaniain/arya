import React from 'react';
import './article.css'

class Article extends React.Component {
  render() {
    return (
      <div className="article-item">
        <h3>Article nb: {this.props.id}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default Article;
