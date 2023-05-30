// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// // const Home = () => {
// //   const [name, setName] = useState("Sahid");
// //   const [age, setAge] = useState(25);

// //   const handleClick = () => {
// //     setName("Zak");
// //     setAge(26);
// //   };

// //   const handleClickAgain = (name) => {
// //     console.log("hello " + name);
// //   //   };
// //   return (
// //     <div className="home">
// //       <h2> Homepage</h2>
// //       <p>
// //         {name} is {age} years old
// //       </p>
// //       <button onClick={handleClick}>Click me</button>
// //     </div>
// //   );
// // };

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   // { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//   // { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
//   // { title: "Welcome party!", body: "lorem ipsum...", author: "mario", id: 3 },
//   // {
//   //   title: "Web dev top tips",
//   //   body: "lorem ipsum...",
//   //   author: "mario",
//   //   id: 3,
//   // },

//   const [name, setName] = useState("mario");
//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blogs) => blogs.id !== id);
//     setBlogs(newBlogs);
//   };

//   useEffect(() => {
//     fetch("http://localhost:8000/blog")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div className="home">
//       {
//         <BlogList
//           blogs={blogs}
//           title="All Blogs by mario"
//           handleDelete={handleDelete}
//         />
//       }
//       <button onClick={() => setName("luigi")}>change name</button>
//       <p>{name}</p>
//       {
//         <BlogList
//           blogs={blogs.filter((blog) => blog.author === "mario")}
//           title="All Blogs by mario"
//         />
//       }
//     </div>
//   );
// };

// // export default Home;
// export default Home;
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(" http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
