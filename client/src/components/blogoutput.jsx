import React, { Component } from 'react';

class BlogOutput extends Component {
    render() {
        let data = this.props.data;
        return (
            <div>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    {
                        data.map((obj, index) =>
                            <tr>
                                <td>
                                    {data[index].blogHeaderText}
                                </td>
                                <td>
                                    {data[index].blogText}
                                </td>
                            </tr>)
                    }
                </table>
            </div>
        );
    }
}

export default BlogOutput;