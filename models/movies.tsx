import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMovie extends Document {
  title: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  poster: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    fresh: number;
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    rotten: number;
    lastUpdated: Date;
  };
}

// Define the IComment interface
export interface IComment extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  movie_id: Schema.Types.ObjectId;
  text: string;
  date: Date;
}

const movieSchema: Schema = new Schema({
  title: { type: String, required: true },
  plot: { type: String, required: true },
  genres: { type: [String], required: true },
  runtime: { type: Number },
  cast: { type: [String] },
  poster: { type: String },
  fullplot: { type: String },
  languages: { type: [String] },
  released: { type: Date },
  directors: { type: [String] },
  rated: { type: String },
  awards: {
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String },
  },
  year: { type: Number },
  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number },
  },
  countries: { type: [String] },
  type: { type: String },
  tomatoes: {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    fresh: { type: Number },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    rotten: { type: Number },
    lastUpdated: { type: Date },
  },
});

// Define the Comment schema
const CommentSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  movie_id: { type: Schema.Types.ObjectId, required: true, ref: "Movie" },
  text: { type: String, required: true },
  date: { type: Date, required: true },
});

export const Comment: Model<IComment> =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);

export const Movie: Model<IMovie> =
  mongoose.models.Movie || mongoose.model<IMovie>("Movie", movieSchema);
