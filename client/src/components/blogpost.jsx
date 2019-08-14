import React, { Component } from 'react';

class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {blogText: ""};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.blogText);
    }
    onChange(e) {
        this.setState({
            blogText: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <form>
                    <textarea name="blog-input" rows="10" cols="100" placeholder="Insert your bullshit here" onChange={this.onChange}></textarea>
                    <br></br>
                    <input id="submit" type="submit" onClick={this.onSubmit}></input>
                </form>
            </div>
        );
    }
}

export default BlogPost;
