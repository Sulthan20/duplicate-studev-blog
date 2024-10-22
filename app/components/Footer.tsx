import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";

const Footer = () => {
    return (
    <footer className="pt-30 pb-20 mt-10 bg-white">
        <div className="container">
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
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;