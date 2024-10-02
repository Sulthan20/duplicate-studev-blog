import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
const Header = () => {
    return (
        <div className="py-1">
            <Image src={logo} alt="logo.svg" />
        </div>
    );
}

export default Header