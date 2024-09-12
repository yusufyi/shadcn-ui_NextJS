import { connectDB } from "../../lib/mongodb";
import { Comment } from "../../models/movies";
import { unstable_cache } from "next/cache";

export const fetchSelectedComments = unstable_cache(async (id: string) => {
  const comments = await Comment.find({ movie_id: id });
  console.log(comments);

  if (comments.length === 0) {
    console.log("No movies found");
    return [];
  }
  return comments;
});
