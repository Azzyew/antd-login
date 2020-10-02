import React, { Component } from "react";
import { PageHeader, Layout } from 'antd';

//icons
import { VideoCameraTwoTone } from "@ant-design/icons";


class header extends Component {
    render() {
        return (
            <Layout>
                <PageHeader theme="dark">
                    <div className="header-content">
                        <h3>WatchIt - The #1 movie platform!<VideoCameraTwoTone twoToneColor="#203175"/></h3>
                    </div>
                </PageHeader>
            </Layout>
        )
    }
}

export default header;