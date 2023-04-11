import React from "react";
import PostsListItem from "./PostsListItem";

class PostList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.posts.map((item) => (
            <PostsListItem id={item.id} title={item.title} body={item.body} />
          ))}
        </ul>
      </>
    );
  }
}
export default PostList;
