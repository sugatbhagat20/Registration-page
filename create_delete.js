const blogs = ["BLOG 1", "BLOG 2"];

function printPost() {
  blogs.forEach((blog) => {
    console.log(blog);
  });
}

async function createPost() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  blogs.push({ title: "BLOG 3" });
}

//try and catch for createpost
(async () => {
  try {
    await createPost();
    console.log("Post created successfully!");
  } catch (error) {
    console.error("Error creating post:", error);
  }
})();

async function deleteBlog() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (blogs.length > 0) {
    const poppedElement = blogs.pop();
    return poppedElement;
  } else {
    throw new Error("ERROR");
  }
}
//try and catch for deletepost
(async () => {
  try {
    const deletedBlog = await deleteBlog();
    console.log("Deleted blog:", deletedBlog);
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
})();

createPost().then(() => deleteBlog().then(printPost));
