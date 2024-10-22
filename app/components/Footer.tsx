import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Facebook from "../public/Facebook.svg";
import Instagram from "../public/Instagram.svg";
import Linkedin from "../public/Linkedin.svg";

const Footer = () => {
    return (
    <footer className="pt-30 pb-9 mt-10 bg-white">
        <div className="container">
            <div className="flex">
                <div className="col-lg-4 col-md-6">
                    <div className="mb-30">
                        <div className="position-relative mb-3">
                            <Image src={logo} alt="logo.svg"></Image> 
                        </div>
                    </div>
                    <div className="-ml-12">
                        <p className={'text-footer-left ${geistSans.variable} box-text pb-5'}>
                            Sumber informasi dan inspirasi bagi para calon mahasiswa yang bercita-cita kuliah ke luar negeri
                        </p>
                        <p className={'text-footer-left-bold ${geistSans.variable} box-text'}>
                            Kantor Bisnis
                        </p>
                        <p className={'text-footer-left ${geistSans.variable} box-text pb-5'}>
                            Jl. Prof. Herman Yohanes No. 1212 Terban, Gondokusuman, Yogyakarta Daerah Istimewa Yogyakarta 55223
                        </p>
                        <p className={'text-footer-left-bold ${geistSans.variable} box-text pb-5'}>
                            Follow me
                        </p>
                        <div className="flex pl-12 gap-2">
                            <Image src={Facebook} alt="Facebook.svg"></Image>
                            <Image src={Instagram} alt="Instagram.svg"></Image>
                            <Image src={Linkedin} alt="Linkedin.svg"></Image>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 ml-5">
                    <li className={'text-hilight ${geistSans.variable} box-text-PL list-none pb-2'}>PRODUK</li>
                    <div className="box-with-border box-text-PL mb-10">
                        <hr className="w-[160px] border-t"></hr>
                    </div>
                    <li className={'text-footer-PL ${geistSans.variable} box-text-PL list-none'}>
                        Bimbingan Beasiswa
                        <hr className="w-[160px] border-t mt-2 mb-2"></hr>
                    </li>
                    <li className={'text-footer-PL ${geistSans.variable} box-text-PL list-none'}>
                        Kelas IELTS Online
                        <hr className="w-[160px] border-t mt-2 mb-2"></hr>
                    </li>
                    <li className={'text-footer-PL ${geistSans.variable} box-text-PL list-none'}>
                        Kelas TOEFL Online
                        <hr className="w-[160px] border-t mt-2 mb-2"></hr>
                    </li>
                    <li className={'text-footer-PL ${geistSans.variable} box-text-PL list-none'}>
                        Kelas Bahasa Inggris Online
                    </li>
                </div>
                <div className="col-lg-4 col-md-6 -ml-11">
                    <li className={'text-hilight ${geistSans.variable} box-text-PL list-none pb-2'}>LAINNYA</li>
                    <div className="box-with-border box-text-PL mb-10">
                        <hr className="w-[160px] border-t"></hr>
                    </div>
                    <li className={'text-footer-PL ${geistSans.variable} box-text-PL list-none'}>
                        Kebijakan Privasi
                        <hr className="w-[160px] border-t mt-2 mb-2"></hr>
                    </li>
                    <li className={'text-footer-PL ${geistSans.variable} box-text-PL list-none'}>
                        Kontak Kami
                        <hr className="w-[160px] border-t mt-2 mb-2"></hr>
                    </li>
                </div>
                <div className="-ml-2">
                    <li className={'text-hilight ${geistSans.variable} box-text list-none pb-2'}>KATEGORI</li>
                    <div className="box-with-border box-text mb-10">
                        <hr className="w-[270px] border-t"></hr>
                    </div>
                    <div className="box-text">
                        <div className="flex gap-2 pb-2">
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Study Aboard
                            </button>
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Tips & Trik
                            </button>
                        </div>
                        <div className="flex gap-2 pb-2">
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Info Beasiswa
                            </button>
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Ceritaku
                            </button>
                        </div>
                        <div className="flex gap-2 pb-2">
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Travel
                            </button>
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Kuliah Luar Negeri
                            </button>
                        </div>
                        <div className="flex gap-2 pb-2">
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Studev Talk
                            </button>
                            <button className={'text-footer-kategori ${geistSans.variable} flex items-center px-[15px] py-[4px] rounded-full bg-gray-100 border border-[rgba(229,229,229,0.72)]'}>
                                Fun Fact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[1098px] ml-12 mt-20 border-t border-style-solid"></hr>
            <div className="pt-7 flex justify-between -mb-50 -pb-30">
                <p className={'text-footer-PL ${geistSans.variable} pl-12'}>© 2023 Studev Blog. PT Sinar Edukasi Nusantara</p>
                <p className={'text-footer-PL ${geistSans.variable} mr-12'}>A Subsidiary of Studev. All rights reserved</p>
            </div>
        </div>
    </footer>
    );
}


export default Footer;