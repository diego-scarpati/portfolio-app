import LeftSide from "./common/LeftSide";
import RightSide from "./common/RightSide";

export default function Home() {
  return (
    <main className="flex w-full px-12 max-h-screen justify-between relative">
      <header className="flex-col max-h-screen justify-center pt-24 px-20 fixed top-0 bottom-0">
        <LeftSide />
      </header>
      <div/>
      <RightSide />
    </main>
  );
}
