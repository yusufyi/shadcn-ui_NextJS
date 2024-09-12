import { IMovie, IComment } from "@/models/movies";
import { fetchSelectedMovie } from "@/lib/actions/getSelectedMovie";
import { fetchSelectedComments } from "@/lib/actions/getAllComments";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const selectedMovie: IMovie[] = await fetchSelectedMovie(params.id);

  if (selectedMovie.length === 0) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-4xl">
        <div className="flex flex-row w-full">
          <div className="flex-shrink-0">
            <Image
              alt="Movie poster"
              src={selectedMovie[0].poster}
              loading="lazy"
              width={300}
              height={450}
              className="mb-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col ml-6">
            <h2 className="text-3xl font-bold mb-2 text-center">
              {selectedMovie[0].title}
            </h2>
            <p className="text-lg mb-4 text-center">
              {selectedMovie[0].fullplot}
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Genres</h3>
                <p>{selectedMovie[0].genres.join(", ")}</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Cast</h3>
                <p>{selectedMovie[0].cast.join(", ")}</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Directors</h3>
                <p>{selectedMovie[0].directors.join(", ")}</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Languages</h3>
                <p>{selectedMovie[0].languages.join(", ")}</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Countries</h3>
                <p>{selectedMovie[0].countries.join(", ")}</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Awards</h3>
                <p>{selectedMovie[0].awards.text}</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">IMDB Rating</h3>
                <p>
                  {selectedMovie[0].imdb.rating} ({selectedMovie[0].imdb.votes}{" "}
                  votes)
                </p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Runtime</h3>
                <p>{selectedMovie[0].runtime} minutes</p>
              </div>
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-xl font-semibold">Released</h3>
                <p>
                  {new Date(selectedMovie[0].released).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            placeholder="Write your comment here..."
            rows={4}
          ></textarea>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
