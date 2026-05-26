import Image from "next/image";
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-4xl font-bold">
          WriteFlow AI
        </h1>

        <p className="mt-4 text-gray-500">
          AI-powered content platform
        </p>
      </main>
      <Footer />
    </div>
  );
}
