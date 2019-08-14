import React, { Component } from 'react';
import BlogPost from './blogpost';

class SideBar extends Component {

    onChange(e) {
        this.props({
            blogText: BlogPost.onChange.props.blogText,
        });
    }
    render() {
        return (
            <aside class="sidebar">
                <div class="sidebar-text">
                    <h3>Test code</h3>
                    <h3>{BlogPost.onChange}</h3>
                </div>
            </aside>
        );
    }
}

export default SideBar;
