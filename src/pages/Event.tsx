import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : (
            <div className="flex-1 flex flex-col items-center justify-center">
              <h1 className="text-4xl text-blue-500 leading-tight">Rumo ao próximo nível 🧑‍🚀</h1>
              <p className="leading-relaxed text-xl text-gray-400">Está pronto para dar o próximo passo para sua evolução?</p>
            </div>
          )
        }
        <Sidebar />
      </main>
    </div>
  )
}