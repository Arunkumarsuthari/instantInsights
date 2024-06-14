import React, { Component } from "react";
import { Card, Button } from "antd";
import "./NewsCard.css";

const { Meta } = Card;

class NewsCard extends Component {
  render() {
    const { image, title, description, news_url } = this.props;

    return (
      <Card
        hoverable
        cover={<img alt="example" src={image} className="news-card-image" />}
        className="news-card"
      >
        <Meta
          title={<div className="news-card-title">{title}...</div>}
          description={
            <div className="news-card-description">{description}...</div>
          }
          className="news-card-meta"
        />
        <Button href={news_url} type="primary" className="read-more-button">
          Read Full Article?
        </Button>
      </Card>
    );
  }
}

export default NewsCard;
