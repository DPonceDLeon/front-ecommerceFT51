import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "@/assets/Logo.png"

const Logo = () => {
    return (
        <div >
          <Link className="flex md:justify-center" href={"/"}>
          <Image src={LogoImage}
          width={200}
          height={150} 
          alt="Market Tecnoly"/>
          </Link>
          
        </div> 
    )
}
export default Logo;