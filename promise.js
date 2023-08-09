let user = {
  posts: [{ title: "Post 1" }],
  lastActivityTime: null,
};

function printPost() {
  console.log(user);
  user.posts.forEach((post) => {
    console.log(post);
  });
  console.log(user.posts.lastActivityTime);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.posts.lastActivityTime = new Date().getTime();

      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const del = user.posts.pop();
      resolve(del);
    }, 1000);
  });
}

Promise.all([
  createPost({ title: "Post Five" }),
  updateLastUserActivityTime(),
]).then(() => {
  printPost();
  deletePost().then(() => printPost());
});
