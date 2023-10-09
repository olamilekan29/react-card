

const Header = ({image,text,price,button})  => {
    console.log(text)
    return(
        <>
        <div className={` md:pl-[20px] w-[350px] pl-[40px]`}>
            {image}
           <div className={`grid text-[#f68b1e] text-[20px]  font-semibold`}>
             {text}</div>
            <div>{price}</div>
           <div className={`grid text-[#000] rounded-xl text-center bg-[#61dafbaa] w-[250px] h-[40px] mb-[30px]`}> {button}</div>
            
            </div>
        </>
        
    )
};
export default Header
