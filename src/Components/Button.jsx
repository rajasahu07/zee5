import React from "react";

const Button=(z)=>{
    console.log("rendering", z.children);
    return(
        <div>

            <button onClick={z.Func}>{z.children}</button>

        </div>
    )
}
export default React.memo(Button)