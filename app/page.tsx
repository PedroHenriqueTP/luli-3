import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root route to the dashboard page
  redirect("/dashboard");
  return null;
}
