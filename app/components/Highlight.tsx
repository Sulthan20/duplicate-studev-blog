import React from "react";
import Image from "next/image";
import Sejarah from "../public/Sejarah Singkat Beasiswa di Indonesia.svg";
import Ellipse from "../public/Gray Ellipse .svg";
import Memahami from "../public/Memahami Dua Tahap Pendaftaran Beasiswa LPDP.svg";

const Highlight = () => {
    return (
    <main>
      <div className="container">
        <div className="hot-tags pt-30 pb-30 mb-10 align-self-center">
          <div className="mx-auto h-[105px] px-[76px] flex items-center justify-between">
            <div className="widget-header-3">
              <div className="row align-self-center">
                <div className="col-lg-8 mb-30 align-self-center">
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
        <div className="flex row">
          <div className="h-[320px] px-[76px] flex items-center justify-start gap-3">
            <div className="col-lg-8 mb-30">
              <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden gap-4 items-center justify-start">
                <div className="thumb-overlay img-hover-slide position-relative">
                  <Image src={Sejarah} alt="Sejarah Singkat Beasiswa di Indonesia.svg" className="image-overlay" />
                  <div className="overlay-text transform -translate-y-3">
                  <h2 className={'text-kategori ${geistSans.variable} mt-1 mb-2 pr-3m pl-3 flex items-center gap-1'}>
                    INFO BEASISWA <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h2>
                  <h3 className={'text-judul ${geistSans.variable} mt-3 mb-2 pr-5m pl-3'}>
                    Perjalanan Singkat Beasiswa di Indonesia</h3>
                  <h4 className={'text-publish ${geistSans.variable} mt-5 pr-5m pl-4'}>
                    <span className="post-on">14 August 2024 12:10</span>
                  </h4>
                  </div>
                </div>
              </div>  
            </div>
          <article className="col-lg-4 col-md-6 mt-2" >
            <div className="w-[343px] h-[420px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.12)] shadow-lg ml-4 items-center justify-center hover-up">
              <div className="thumb-overlay-article position-relative img-hover-article">
                <Image src={Memahami} alt="Memahami Dua Tahap Pendaftaran Beasiswa LPDP.svg"></Image>
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