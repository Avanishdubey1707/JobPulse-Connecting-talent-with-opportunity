import { IconAsset } from "@tabler/icons-react";

const Header = () =>{
    return <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
       <div className="flex gap-3">
           <IconAsset className="h-10 w-10" stroke={1.25}/>
          Jobpulse
       </div>
       <div>
        links
       </div>
       <div>
        profile
       </div>
    </div>
}

export default Header;