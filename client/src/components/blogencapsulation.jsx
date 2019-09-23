import React, { Component } from 'react';
import BlogPost from './blogpost';

class BlogEncapsulation extends Component {

    setBlogPost(header, body) {
        this.header = header;
        this.body = body;
    }

    getBlogHeader() {
        return this.header;
    }

    getBlogBody() {
        return this.body;
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default BlogEncapsulation;
