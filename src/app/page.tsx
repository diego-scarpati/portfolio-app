import StoreProvider from "./StoreProvider";
import LeftSide from "./common/LeftSide";
import RightSide from "./common/RightSide";

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex w-full max-h-screen justify-between relative lg:px-12 md:px-8">
        <header className="flex-col max-h-screen justify-center pt-24 px-20 fixed top-0 bottom-0 w-1/2">
          <LeftSide />
        </header>
        <div />
        <RightSide />
      </main>
    </StoreProvider>
  );
}
