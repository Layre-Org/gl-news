import News from "@/components/news";

function Home() {
  return (
    <div className=" p-4 flex flex-col gap-4">
      <News />
      <div className="w-full h-full grid grid-cols-2 gap-4">
        <News size="sm" />
        <News size="sm" />
      </div>
    </div>
  );
}

export default Home;
