import React from "react";
import { PageHeader, Layout, Row, Col, Divider } from "antd";

//icons
import { VideoCameraFilled, GithubOutlined } from "@ant-design/icons";


const Home = () => {
  
  const style = { background: "var(--primary-color)", padding: "8px 0"};
  const welcomeStyle = { background: "var(--primary-color)", color: "#fff", margin: "3vh" };
  const gridStyle = { height: "45vh", width: "30vw;" };

  return(
      
    <Layout className="home">
      
      <PageHeader className="header">
          <div className="header-content">
            <h3>WatchIt - The #1 movie platform<VideoCameraFilled/></h3>
            <a href="https://github.com/Azzyew"><GithubOutlined /></a>
          </div>
      </PageHeader>
        
      <Row justify='center' align='middle'>
        <Col>
            <h2 style={welcomeStyle}>Welcome!</h2>
        </Col>
          
        <Divider orientation="left" style={welcomeStyle}>Popular Movies</Divider>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="movie-grid" span={6}>
              <div style={style}>Enola Holmes</div>
              <img src="https://images.everyeye.it/img-cover/enola-holmes-v2-42739-340.jpg" alt="enola" style={gridStyle}></img>
            </Col>
            <Col className="movie-grid" span={6}>
              <div style={style}>O Diabo de Cada Dia</div>
              <img src="https://secureservercdn.net/50.62.172.113/48q.bb1.myftpupload.com/wp-content/uploads/2020/09/Volante-Equipment-Trouble-Form.jpg?time=1600812472" alt="devil" style={gridStyle}></img>
            </Col>
            <Col className="movie-grid" span={6}>
              <div style={style}>Tenet</div>
              <img src="https://cdn.collider.com/wp-content/uploads/2020/07/tenet-august-release-poster-john-david-washington.jpeg" alt="tenet" style={gridStyle}></img>
            </Col>
            <Col className="movie-grid" span={6}>
              <div style={style}>Mulan</div>
              <img src="https://image.tmdb.org/t/p/original/w1IEDHlmglRfY37AnRU60x9Lt0f.jpg" alt="mulan" style={gridStyle}></img>
            </Col>
          </Row>
            </Row>



    </Layout>
      
  )
}

export default Home;