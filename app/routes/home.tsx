import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { resume } from "react-dom/server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumide" },
    { name: "description", content: "Smart feeback for your dream job" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1 className="">Track Your Applications & Resume Rating</h1>
          <h2>Review your submission and receive AI-powered feedback.</h2>
        </div>
      </section>
      {resumes.length > 0 && (
        <div className="resume-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
