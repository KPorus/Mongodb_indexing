import Post from "./post.model";

const getSpecificPost = async (data: string) => {
  // console.log(data.data);
  const post = await Post.find(
    { $text: { $search: data } },
    { score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } });
  console.log(post);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

export const postService = {
  getSpecificPost,
};
