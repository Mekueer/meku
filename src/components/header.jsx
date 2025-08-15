
export function Header(){
    return(
        <header>
            <div className="hidden md:flex justify-between z-50 px-5 " >
                <div>
                   <span className="text-green text-center">Mequanent </span>
                   <span className="text-red-300">Erkie</span>
                </div>
                                  
               <div className=" flex justify-between w-48">
                <div className="hover:text-green-400">
                    <a href="#top">Home</a>
                    </div>
                <div className= "hidden lg:flex hover:text-green-400">
                    <a href="#">About</a>
                </div>
                <div className="hover:text-green-400">
                    <a href="#">Contact</a>
                </div>
                
               </div>
               <div>theme</div> 
            </div>
             
        </header>
 
       
    )
}