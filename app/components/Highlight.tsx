import React from "react";
import Image from "next/image";
import Sejarah from "../public/Sejarah Singkat Beasiswa di Indonesia.svg";
import Ellipse from "../public/Gray Ellipse .svg";
import Memahami from "../public/Memahami Dua Tahap Pendaftaran Beasiswa LPDP.svg";
import Persiapan from "../public/Persiapan IELTS.svg";
import WorkHoli from "../public/Working Holiday Visa (WHV) peluang tinggal di luar negeri.svg";
import InfoLengkap from "../public/Informasi Lengkap Tentang Working Holiday Visa Australia.svg";

const Highlight = () => {
    return (
    <main>
      <div className="container">
        <div className="hot-tags align-self-center">
          <div className="mx-auto h-[105px] mt-6 -mb-6 flex items-center justify-between">
            <div className="widget-header-3">
              <div className="row align-self-center">
                <div className="col-lg-8 align-self-center">
                  <ul className="list-none justify-center items-center">
                    <li className={'text-hilight ${geistSans.variable}'}>
                      HIGHLIGHT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="loop-grid mb-30">
          <div className="block row">
            <div className="flex gap-5">
              <div className="col-lg-8 mb-30">
                <div className="carausel-post-1 border-radius-10 overflow-hidden items-center justify-start">
                  <div className="thumb-overlay img-hover-slide position-relative">
                    <Image src={Sejarah} alt="Sejarah Singkat Beasiswa di Indonesia.svg" className="image-overlay" />
                    <div className="overlay-text transform -translate-y-3">
                      <h2 className={'text-kategori ${geistSans.variable} mt-1 mb-2 pr-3m pl-3 flex items-center gap-1'}>
                      INFO BEASISWA <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h2>
                      <h3 className={'text-judul ${geistSans.variable} mt-3 mb-2 pr-5m pl-3'}>
                      Perjalanan Singkat Beasiswa di Indonesia</h3>
                      <h4 className={'text-publish ${geistSans.variable} mt-5 pr-5m pl-4'}>
                      <span className="post-on">14 August 2024 12:10</span></h4>
                    </div>
                  </div>
                </div>  
              </div>
              <article className="col-lg-8 -ml-1.5 mt-3 pt-4" >
                <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(255,255,255,0.72)] shadow-lg ">
                  <div className="thumb-overlay-article position-relative img-hover-article">
                    <Image src={Memahami} alt="Memahami Dua Tahap Pendaftaran Beasiswa LPDP.svg"></Image>
                  </div>
                  <div className="post-content p-30">
                    <h1 className={'text-kategori ${geistSans.variable} flex -mt-1 gap-1'}>
                        Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
                    <h2 className={'text-judul-article ${geistSans.variable} mb-10'}>
                      Memahami Dua Tahap Pendaftaran Beasiswa LPDP</h2>
                    <h3 className={'text-publish-article ${geistSans.variable} '}>
                      09 AUGUST 2024 13:11</h3>
                  </div>
                </div>
              </article>
            </div>
            <div className="flex ">
            <article className="col-lg-4 col-md-6 " >
            <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(255,255,255,0.72)] shadow-lg ">
                  <div className="thumb-overlay-article position-relative img-hover-article">
                    <Image src={Persiapan} alt="Persiapan IELTS.svg"></Image>
                  </div>
                  <div className="post-content p-30">
                    <h1 className={'text-kategori ${geistSans.variable} flex -mt-1 gap-1'}>
                        Tips & Trik <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
                    <h2 className={'text-judul-article ${geistSans.variable} mb-12'}>
                      Persiapan IELTS yang Efektif: Do's dan Dont'ts untuk Skor Terbaik</h2>
                    <h3 className={'text-publish-article ${geistSans.variable}'}>
                      05 AUGUST 2024 15:52</h3>
                  </div>
                </div>
            </article>
            <article className="col-lg-4 col-md-6" >
            <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(255,255,255,0.72)] shadow-lg ">
                  <div className="thumb-overlay-article position-relative img-hover-article">
                    <Image src={WorkHoli} alt="Working Holiday Visa (WHV) peluang tinggal di luar negeri.svg"></Image>
                  </div>
                  <div className="post-content p-30">
                    <h1 className={'text-kategori ${geistSans.variable} flex -mt-1 gap-1'}>
                      Tips & Trik <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
                    <h2 className={'text-judul-article ${geistSans.variable} mb-12'}>
                      Working Holiday Visa (WHV): Peluang Tinggal dan Bekerja di Luar Negeri</h2>
                    <h3 className={'text-publish-article ${geistSans.variable}'}>
                      26 JULY 2024 16:18</h3>
                  </div>
                </div>
            </article>
            <article className="col-lg-4 col-md-6" >
            <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(255,255,255,0.72)] shadow-lg ">
                  <div className="thumb-overlay-article position-relative img-hover-article">
                    <Image src={InfoLengkap} alt="Informasi Lengkap Tentang Working Holiday Visa Australia.svg"></Image>
                  </div>
                  <div className="post-content p-30">
                    <h1 className={'text-kategori ${geistSans.variable} flex -mt-1 gap-1'}>
                      Tips & Trik <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
                    <h2 className={'text-judul-article ${geistSans.variable} mb-12'}>
                      Informasi Lengkap Tentang Working Holiday Visa (WHV) Australia</h2>
                    <h3 className={'text-publish-article ${geistSans.variable}'}>
                      28 MAY 2024 11:46</h3>
                  </div>
                </div>
            </article>
            </div>  
          </div>
        </div>
      </div>  
    </main>  
    );
  };
  
export default Highlight;