import React from "react";

class PostListItem extends React.Component {
  handleEditPost = () => {
    // open modal => id post
  };

  handleDeletePost = (id) => {
    console.log(`click Delete`, id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
    });
  };

  render() {
    let { id, title, body } = this.props;
    return (
      <>
        <li id={id}>
          <h2> {title}</h2>
          <p>{body}</p>
          <div>
            <button onClick={(e) => this.handleDeletePost(id, e)}>Delete</button>
            <button onClick={this.handleEditPost}>Edit</button>
          </div>
        </li>
      </>
    );
  }
}
export default PostListItem;
