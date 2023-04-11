import React from "react";
import PostList from "./PostList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      posts: [],
    };
  }

  addPost = () => {
    console.log(`click Add`);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: `{title}`,
        body: `{body}`,
        userId: `{id}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  editPost = () => {
    console.log(`click Edit`);
    fetch("https://jsonplaceholder.typicode.com/posts/{id}", {
      method: "PATCH",
      body: JSON.stringify({
        title: `{title}`,
        body: `{body}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  deletePost = () => {
    console.log(`click Delete`);
    fetch(`https://jsonplaceholder.typicode.com/posts/{id}`, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            posts: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  componentDidUpdate(prevProps) {}

  render() {
    const { posts } = this.state;
    return (
      <>
        <PostList posts={posts} />
      </>
    );
  }
}
export default App;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isToggle: true,
//       name: "Stepan",
//       age: 25,
//     };
//   }
//   onClickBtn = () => {
//     let { name } = this.state.name;
//     if (name !== "Mykola") {
//       this.setState({ name: "Mykola", age: "30" });
//     }
//     this.setState({ isToggle: !this.state.isToggle });
//   };

//   render() {
//     let { name, age, isToggle } = this.state;
//     return (
//       <>
//         {isToggle ? (
//           <p>
//             Name: {name}, age: {age}
//           </p>
//         ) : (
//           ""
//         )}

//         <button onClick={this.onClickBtn}>Click on me</button>
//       </>
//     );
//   }
// }
// export default App;
