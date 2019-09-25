import React, { Component } from 'react';
import BlogEncapsulation from './blogencapsulation';

class BlogOutput extends Component {
    render() {
        let data = this.props.data;
        return (
            <div>
                {
                    data.map((obj, index) =>
                        <BlogEncapsulation header={this.props.data[index].blogHeaderText}
                            body={this.props.data[index].blogText} />
                    )
                }
            </div>
        );
    }
}

export default BlogOutput;