import  {LockKeyhole} from "lucide-react";
import CommonWrapper from "../common/CommonWrapper";


const Home = () => {
  return (
    <CommonWrapper>
      <div className="">
        <div className="flex py-4 gap-2 justify-center min-h-screen ">
         <LockKeyhole  />
         <p>Bank-level security</p>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Home;
