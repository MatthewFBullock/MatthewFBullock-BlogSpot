import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogInput extends Component {
    constructor(props) {
        super(props);
        this.state = { blogText: "", blogHeaderText: "" };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /// function called upon "Submit" button being pressed.
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({ "blogHeaderText": this.state.blogHeaderText, "blogText": this.state.blogText });
    }
    /// function called as values within textarea is changed.
    onChange(e) {
        if (e.target.name == "title-input") {
            this.setState({
                blogHeaderText: e.target.value,
            });
        }
        else {
            this.setState({
                blogText: e.target.value,
            });
        }
    }

    render() {
        return (
            <div class="container">
                <form>
                    <textarea name="title-input" cols="100" placeholder="Insert your bullshit title here" onChange={this.onChange}></textarea>
                </form>
                <form>
                    <textarea name="blog-input" rows="10" cols="100" placeholder="Insert your bullshit here" onChange={this.onChange}></textarea>
                    <br></br>
                    <Button id="submit" type="submit" onClick={this.onSubmit}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default BlogInput;
