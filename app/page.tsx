import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import TopNav from "@/components/Nav/TopNav";
import MainContent from "@/components/MainContent/MainContent";

const Home = () => {
  return (
    <main className="bg-blue-600 min-h-screen max-w-screen-2xl overflow-x-hidden mx-auto">
      <Header />
      <section className="flex min-h-screen max-w-screen-2xl md:mx-auto overflow-x-hidden bg-blue-600">
        <Sidebar />
        <main className="flex flex-col w-full">
          <TopNav />
          <MainContent />
        </main>
      </section>
    </main>
  );
};

export default Home;
