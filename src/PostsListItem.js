import React from "react";

class PostListItem extends React.Component {
  render() {
    return (
      <>
        <li id={this.props.id}>
          <h2> {this.props.title}</h2>
          <p>{this.props.body}</p>
          <div>
            <button> Add</button>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </li>
      </>
    );
  }
}
export default PostListItem;
