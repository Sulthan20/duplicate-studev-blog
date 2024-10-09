import React from "react";
import Image from "next/image";
import Sejarah from "../public/Sejarah Singkat Beasiswa di Indonesia.svg";

const Highlight = () => {
    return (
    <main>
      <div className="container">
        <div className="mx-auto h-[105px] px-[76px] flex items-center justify-between">
          <div className="widget-header-3">
            <div className="row align-self-center">
              <div className="col-md-3 align-self-center">
                <ul className="list-none justify-center items-center gap-10">
                  <li className={'text-hilight ${geistSans.variable}'}>
                      HIGHLIGHT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto h-[400px] px-[76px] flex items-center justify-between">
        <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp">
          <div className="thumb-overlay img-hover-slide position-relative">
            <Image src={Sejarah} alt="Sejarah Singkat Beasiswa di Indonesia.svg" className="image-overlay" />
            <div className="overlay-text">
              <h2>Info Beasiswa</h2>
              <h3>Perjalanan Singkat Beasiswa di Indonesia</h3>
            </div>
          </div>
        </div>
      </div>
    </main>  
    );
  };
  
export default Highlight;