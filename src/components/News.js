import React, { Component } from "react";
import { Row, Col } from "antd";
import NewsCard from "./NewsCard";
import "./News.css";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = "https://inshortsapi.vercel.app/news?category=all";
    const datas = await fetch(url);
    const parsedData = await datas.json();
    this.setState({ data: parsedData.data });
  }
  render() {
    return (
      <div className="news-container">
        <Row gutter={[16, 16]} justify="center">
          {this.state.data.map((article, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <NewsCard
                image={
                  article.imageUrl
                    ? article.imageUrl
                    : "https://th.bing.com/th?id=OIP.L1nR_3pSUTMMXbrIf4Nz8QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                }
                title={
                  article.title
                    ? article.title.slice(0, 75)
                    : "No Title Available"
                }
                description={
                  article.content
                    ? article.content.slice(0, 100)
                    : "No Description Available"
                }
                news_url={article.url}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default News;
