import React, { Component } from 'react';
import BlogInput from './bloginput';

class SideBar extends Component {

    onChange(e) {
        this.props({
            blogText: BlogInput.onChange.props.blogText,
        });
    }
    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar-text">
                    <h3>Test code</h3>
                    <h3>{BlogInput.onChange}</h3>
                </div>
            </aside>
        );
    }
}

export default SideBar;
