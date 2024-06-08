import MessageContainer from "../../components/messages/MessageContainer";
import SideBar from "../../components/sidebar/SideBar";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

      <SideBar />
      <MessageContainer />
    </div>
  )
}
