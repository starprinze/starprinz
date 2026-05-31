import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Products from "./components/ui/Products";
import Ecosystem from "./components/ui/Ecosystem";
import LiveAndStack from "./components/ui/LiveAndStack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Ecosystem />
      <LiveAndStack />
    </main>
  );
}
