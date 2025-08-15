export function About(){
    return(
        <div>
            <div>
                <p>Introduction</p>
                <h1>About Me</h1>
            </div>
            <div>
                <div>
                    <img className="h-28 w-20" src="me2.jpg" alt=" meku" />
                </div>
                <div className=" border-spacing-1 border-4 flex justify-between">
                    <div className="border-red-200 border-2">language</div>
                    <div>education</div>
                    <div>Projects</div>
                </div>
            </div>
        </div>
    )
}