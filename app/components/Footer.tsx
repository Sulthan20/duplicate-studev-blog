import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Facebook from "../public/Facebook.svg";
import Instagram from "../public/Instagram.svg";
import Linkedin from "../public/Linkedin.svg";

const Footer = () => {
    return (
    <footer className="pt-30 pb-20 mt-10 bg-white">
        <div className="container flex">
            <div className="row-footer">
                <div className="col-lg-4 col-md-6">
                    <div className="sidebar-widget mb-30">
                        <div className="widget-header-2 position-relative mb-3">
                            <Image src={logo} alt="logo.svg"></Image> 
                        </div>
                    </div>
                </div>
                <div className="textwidget">
                    <p className={'text-footer-left ${geistSans.variable} box-text pb-5'}> Sumber informasi dan inspirasi bagi para calon mahasiswa yang bercita-cita kuliah ke luar negeri</p>
                    <p className={'text-footer-left-bold ${geistSans.variable} box-text'}> Kantor Bisnis</p>
                    <p className={'text-footer-left ${geistSans.variable} box-text pb-5'}> Jl. Prof. Herman Yohanes No. 1212 Terban, Gondokusuman, Yogyakarta Daerah Istimewa Yogyakarta 55223</p>
                    <p className={'text-footer-left-bold ${geistSans.variable} box-text pb-5'}> Follow me</p>
                    <image className="flex pl-12 gap-2">
                        <Image src={Facebook} alt="Facebook.svg"></Image>
                        <Image src={Instagram} alt="Instagram.svg"></Image>
                        <Image src={Linkedin} alt="Linkedin.svg"></Image>
                    </image>
                </div>
            </div>
            <div className="position-relative -ml-9">
                <li className={'text-hilight ${geistSans.variable} box-text list-none pb-2'}>
                    PRODUK
                </li>
                <hr className="w-[150px] ml-12 border-t border-style-solid">
                </hr>
            </div>
        </div>
    </footer>
    );
}

export default Footer;