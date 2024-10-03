import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Arrow from "../public/DownArrow.svg";

const Header = () => {
    return (
        <header className="main-header header-style-1 font-heading">
            <div className="header-top">
                <div className="container mx-auto h-[78px] px-[76px] flex items-center justify-between">    
                        <Image src={logo} alt="logo.svg" />
                        <div className="col-md-9 col-xs-6 text-right header-top-right">
                            <ul className="list-inline nav-topbar d-none d-md-inline">
                                <li className={'text-programkursus ${geistSans.variable}'}>
                                    <a className="container mx-auto px-[30px] flex items-center justify-center gap-2">
                                        Program Kursus <Image src={Arrow} alt="DownArrow.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </header>        
    );
}

export default Header