import Toggle from "./toggle";

const Home = () => {
  return (
    <>
      <main>
        <header>
          <nav className=" bg-[#202022] w-[1480px] flex items-center justify-between pr-5 pl-5 h-[70px] text-white ">
            <div>
              <p>Onebox</p>
            </div>
            <div className="flex justify-between border border-red-600 gap-10">
              <Toggle/>
              <p>Tim workSpace</p>
            </div>
          </nav>
        </header>
<section className="right w-[300px]">
    


</section>


      </main>
    </>
  );
};
export default Home;
