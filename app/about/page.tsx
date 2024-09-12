"use client";
import { useEffect } from "react";
import Movie from "../../models/movies";
import { connectToDB } from "@/lib/mongodb";

export default function About() {
  useEffect(() => {
    async function fetchData() {
      await connectToDB();
      const movies = await Movie.find({});
      console.log(movies);
      if (movies.length === 0) {
        console.log("No movies found");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
