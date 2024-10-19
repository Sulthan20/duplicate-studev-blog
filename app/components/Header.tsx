import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Arrow from "../public/DownArrow.svg";
import Search from "../public/Search.svg";

const Header = () => {
    return (
        <header className="main-header header-style-1 font-heading">
            <div className="header-top">
                <div className="container mx-auto h-[78px]  flex items-center justify-between">    
                    <Image src={logo} alt="logo.svg" className="mx-15" />
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
            <div className="h-[5px] flex items-center justify-between">
                <hr className="w-full border-t border-style-solid">
                </hr>
            </div>
            <div className="header-sticky">
                <div className="container mx-auto h-[10px] px-[76px] flex items-center justify-between">
                    <div className="col-md-10 col-xs-10 text-right header-top-right">
                        <div className="main-menu d-none d-lg-in line font-small">
                            <nav>
                                <ul className="list-none flex justify-center items-center gap-10">
                                    <li className={'text-navstick ${geistSans.variable'}>
                                        <a>
                                            Study Aboard
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Tips & Trik
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Info Beasiswa
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Ceritaku
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Travel
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Kuliah Luar Negeri
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Studev Talk
                                        </a>                                                           
                                    </li>
                                    <li className={'text-navstick ${geistSans.variable}'}>
                                        <a>
                                            Fun Fact
                                        </a>                                                           
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                        <button className="ml-auto mt-7 list-none flex justify-center items-center gap-1">
                            <li className={'text-programkursus ${geistSans.variable}'}>
                                <a className="container mx-auto flex items-center justify-center gap-2">
                                    <Image src={Search} alt="Search.svg"/>
                                    Cari
                                </a>    
                            </li>
                        </button>        
                    </div>
                </div>
        </header>       
    );
}

export default Header