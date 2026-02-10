import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CanDoNavigator from "@/components/CanDoNavigator";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CanDoNavigator />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
