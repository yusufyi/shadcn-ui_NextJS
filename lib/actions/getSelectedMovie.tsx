import { connectDB } from "../../lib/mongodb";
import { Movie } from "../../models/movies";
import { unstable_cache } from "next/cache";

export const fetchSelectedMovie = unstable_cache(async (id: string) => {
  const movies = await Movie.find({ _id: id });

  if (movies.length === 0) {
    console.log("No movies found");
    return [];
  }
  return movies;
});
