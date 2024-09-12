import { connectDB } from "../../lib/mongodb";
import { Movie } from "../../models/movies";
import { unstable_cache } from "next/cache";

export const fetchAllMovies = unstable_cache(async () => {
  await connectDB();
  const movies = await Movie.find({}).limit(30);

  if (movies.length === 0) {
    console.log("No movies found");
    return [];
  }
  return movies;
});
