import StoreProvider from "./StoreProvider";
import BackToTopButton from "./common/BackToTopButton";
import Contact from "./common/Contact";
import LeftSide from "./common/LeftSide";
import RightSide from "./common/RightSide";

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex flex-col lg:flex-row w-full max-h-screen justify-between relative lg:px-12 md:px-8">
        <header className="flex-col max-h-screen justify-center pt-12 md:pt-16 lg:pt-24 px-12 md:px-16 lg:px-20 lg:fixed top-0 bottom-0 lg:w-1/2 w-full">
          <LeftSide />
        </header>
        <div />
        <RightSide />
        <div className="lg:hidden flex justify-center pb-12">
          <Contact />
        </div>
        <BackToTopButton />
      </main>
    </StoreProvider>
  );
}
