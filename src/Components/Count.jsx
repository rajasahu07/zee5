import React from "react";

const Count=(x)=>{
    console.log("rendering",x.children);

    
    return(
        <div>
            
            {x.children}:{x.data}

        </div>
    )
}
export default React.memo(Count)