import React from "react";
import PostList from "./component/PostList";
import AddNewPostForm from "./component/AddNewPostForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      posts: [],
    };
  }

  componentDidMount() {
    console.log(`componentDidMount`);
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

  componentDidUpdate(prevState) {
    console.log(`componentDidUpdate`);
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <AddNewPostForm />
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
