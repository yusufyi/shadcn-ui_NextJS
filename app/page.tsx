import { fetchAllMovies } from "@/lib/actions/getAllMovies";
import { IMovie } from "@/models/movies";
import Dashboard from "@/components/dashboard-06";
export default async function Page() {
  // Fetch all movies typed as IMovie[]

  const allMovies: IMovie[] = await fetchAllMovies();

  console.log(allMovies);
  // return (
  //   <ul>
  //     {allMovies.map((post) => (
  //       <li key={post._id}>
  //         <Image src={post.poster} alt={post.title} width={200} height={300} />
  //         <h2>{post.title}</h2>
  //         <p>{post.plot}</p>
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}
