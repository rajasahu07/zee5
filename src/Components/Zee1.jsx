import abc from "./zee1.module.css"


const Zee1=()=>{
//     let demoRef=useRef()
//    let chan=()=>{
//         demoRef.current.style.display="none"
//     }
    return(
        <div className={abc.maind}>
            <section>
                <article>
                    <div className={abc.logo}>
                        <a href=""><img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.98" alt="Logo" /></a>
                        </div>
                        <div className={abc.Menu}>
                        <ol>
                            <li><a href="">Home</a> </li>
                            <li><a href="">TV shows</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Cricket</a></li>
                            <li><a href="">Web series</a></li>
                            <li> <div className={abc.grid}>
                        <div className={abc.grida}>
                            <div className={abc.flexa}></div><div className={abc.flexa}></div><div className={abc.flexa}></div>
                        </div>
                        <div className={abc.gridb}><div className={abc.flexb}></div><div className={abc.flexb}></div><div className={abc.flexb}></div></div>
                        <div className={abc.gridc}><div className={abc.flexc}></div><div className={abc.flexc}></div><div className={abc.flexc}></div></div>
                    </div></li>
                        </ol>
                        </div>
                        <div className={abc.Menu1}></div>
                       
                    

                   


                    <div className={abc.search}>
                        <div className={abc.div}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for Movies,Shows and Channels etc"/>
                    </div>
                    </div>

                    <div className={abc.Menu2}>
                    <i id={abc.al} class="fa-solid fa-language"></i> 
                    <button className={abc.login}><a href="/signin">Login</a>  </button>                 
                     
                     <button type="button" id={abc.vio} class="btn btn-primary"><i class="fa-solid fa-crown"></i>Buy Plan</button>
                     <i id={abc.ham}class="fa-solid fa-bars"></i>
                      </div>
                       {/* <div>
                            <div className={abc.hamburger}></div>
                            <div className={abc.hamburger}></div>
                            <div className={abc.hamburger}></div>
                        </div> */}
                </article>
            </section>

            <div className={abc.image}>
                <img src="https://s3images.zee5.com/wp-content/uploads/sites/7/2021/12/Kajol-2021-12-17T193803.365.jpg" alt="" />
                <img src="https://www.mcqfreak.com/blogger/uploads/images/202102/image_750x_60311160538d5.jpg" alt="" />
            </div>



        </div>
    )
}
export default Zee1