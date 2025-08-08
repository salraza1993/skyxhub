import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";
import HomePageClient from "./HomePageClient";

// Server Component - handles data fetching
export default async function HomePage() {
  // Fetch data on the server
  const allPosts = await getSortedPostsData();
  const allProjects = await getSortedProjectsData();

  // Pass data to client component
  return <HomePageClient posts={allPosts} projects={allProjects} />;
}
