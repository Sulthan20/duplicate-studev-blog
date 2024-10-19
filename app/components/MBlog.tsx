import React from "react";
import Image from "next/image";
import Ellipse from "../public/Gray Ellipse .svg";
import Beasiswa1 from "../public/Info Beasiswa 1.svg";
import Beasiswa2 from "../public/Info Beasiswa 2.svg";
import Beasiswa3 from "../public/Info Beasiswa 3.svg";
import Tips1 from "../public/Tips dan Trik 1.svg";
import Tips2 from "../public/Tips dan Trik 2.svg";
import Tips3 from "../public/Tips dan Trik 3.svg";

const MBlog = () => {
    return (
    <div className="bg-grey pt-50 pb-50">
      <div className="container mt-20 pt-0.5">
        <div className="row-mblog">
          <div className="col-lg-12">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mt-5">
                <div className="flex items-center justify-between">
                  <div className="col-md-10">
                    <h5 className={'text-hilight ${geistSans.variable}'}>INFO BEASISWA</h5>
                  </div>
                  <div className="col-md-2">
                    <h5 className={'text-lihat-semua ${geistSans.variable}'}>Lihat Semua</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[15px] flex items-center justify-between">
          <hr className="w-[950px] ml-12 border-t border-style-solid">
          </hr>
        </div>
        <div className="block row">
        <div className="flex ml-1 items-center gap-6">
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa1} alt="Info Beasiswa 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Beasiswa LPDP Buka 19 Juni 2024, Bisakah Daft...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Lembaga Pengelola Dana Pendidikan (LPDP) akan membuka pendaftaran untuk program beasi...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              10 JUNE 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: STUDEV MEDIA</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa2} alt="Info Beasiswa 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Jelajahi 19 Ragam Beasiswa yang Bisa Kamu Pil...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Jika kamu mencari beasiswa, kamu perlu memahami jenis beasiswa yang ter...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              05 APRIL 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa3} alt="Info Beasiswa 3.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Raih Impian Kuliah di Luar Negeri dengan 10 B...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Berikut beberapa rekomendasi beasiswa fully funded S2-S3 untuk kamu!</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              19 FEBRUARY 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        </div>
        </div>
      </div>
      <div className="container -mt-5">
        <div className="row-mblog">
          <div className="col-lg-12">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mt-10">
                <div className="flex items-center justify-between">
                  <div className="col-md-10">
                    <h5 className={'text-hilight ${geistSans.variable}'}>TIPS dAN TRIK</h5>
                  </div>
                  <div className="col-md-2">
                    <h5 className={'text-lihat-semua ${geistSans.variable}'}>Lihat Semua</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[15px] flex items-center justify-between">
          <hr className="w-[950px] ml-12 border-t border-style-solid">
          </hr>
        </div>
        <div className="block row">
        <div className="flex ml-1 items-center gap-6">
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Tips1} alt="Tips dan Trik 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Tips & Trik <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Pendidikan Fondasi untuk Pengembangan Individu...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Pendidikan penting karena membentuk karakter, mengasah keterampilan,...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              23 AUGUST 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Tips2} alt="Tips dan Trik 2.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Tips & Trik <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Memilih Jurusan yang Tepat: Ilmu Gizi atau...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Memilih antara Jurusan Ilmu Gizi dan Jurusan Teknologi Pangan bisa...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              31 JULY 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Tips3} alt="Tips dan Trik 3.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Tips & Trik <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              6 Rekomendasi Jurusan Kuliah Tanpa Mat...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Jurusan tanpa matematika adalah pilihan menarik untuk kamu yang tidak menyukai mat...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              20 JULY 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        </div>
        </div>
      </div>
      <div className="container -mt-5">
        <div className="row-mblog">
          <div className="col-lg-12">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mt-10">
                <div className="flex items-center justify-between">
                  <div className="col-md-10">
                    <h5 className={'text-hilight ${geistSans.variable}'}>Info Beasiswa</h5>
                  </div>
                  <div className="col-md-2">
                    <h5 className={'text-lihat-semua ${geistSans.variable}'}>Lihat Semua</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[15px] flex items-center justify-between">
          <hr className="w-[950px] ml-12 border-t border-style-solid">
          </hr>
        </div>
        <div className="block row">
        <div className="flex ml-1 items-center gap-6">
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa1} alt="Info Beasiswa 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Beasiswa LPDP Buka 19 Juni 2024, Bisakah Daft...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Lembaga Pengelola Dana Pendidikan (LPDP) akan membuka pendaftaran untuk program beasi...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              10 JUNE 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: STUDEV MEDIA</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa2} alt="Info Beasiswa 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Jelajahi 19 Ragam Beasiswa yang Bisa Kamu Pil...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Jika kamu mencari beasiswa, kamu perlu memahami jenis beasiswa yang ter...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              05 APRIL 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa3} alt="Info Beasiswa 3.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Raih Impian Kuliah di Luar Negeri dengan 10 B...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Berikut beberapa rekomendasi beasiswa fully funded S2-S3 untuk kamu!</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              19 FEBRUARY 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        </div>
        </div>
      </div>
      <div className="container -mt-5">
        <div className="row-mblog">
          <div className="col-lg-12">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mt-10">
                <div className="flex items-center justify-between">
                  <div className="col-md-10">
                    <h5 className={'text-hilight ${geistSans.variable}'}>Info Beasiswa</h5>
                  </div>
                  <div className="col-md-2">
                    <h5 className={'text-lihat-semua ${geistSans.variable}'}>Lihat Semua</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[15px] flex items-center justify-between">
          <hr className="w-[950px] ml-12 border-t border-style-solid">
          </hr>
        </div>
        <div className="block row">
        <div className="flex ml-1 items-center gap-6">
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa1} alt="Info Beasiswa 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Beasiswa LPDP Buka 19 Juni 2024, Bisakah Daft...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Lembaga Pengelola Dana Pendidikan (LPDP) akan membuka pendaftaran untuk program beasi...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              10 JUNE 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: STUDEV MEDIA</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa2} alt="Info Beasiswa 1.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Jelajahi 19 Ragam Beasiswa yang Bisa Kamu Pil...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Jika kamu mencari beasiswa, kamu perlu memahami jenis beasiswa yang ter...</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              05 APRIL 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        <article className="col-lg-8 -ml-1.5 pt-7" >
          <div className="w-[341px] bg-white rounded-[10px] border border-[rgba(0,0,0,0.1)] shadow-lg ">
            <div className="thumb-overlay-article position-relative img-hover-article">
              <Image src={Beasiswa3} alt="Info Beasiswa 3.svg"></Image>
            </div>
            <div className="post-content p-30">
            <h1 className={'text-kategori ${geistSans.variable}  flex items-center gap-1'}>
              Info Beasiswa <Image src={Ellipse} alt="Gray Ellipse .svg" className="mt-1"></Image></h1>
            <h2 className={'text-judul-article ${geistSans.variable} mb-3'}>
              Raih Impian Kuliah di Luar Negeri dengan 10 B...</h2>
            <h3 className={'text-isi-article ${geistSans.variable} mb-10'}>
              Berikut beberapa rekomendasi beasiswa fully funded S2-S3 untuk kamu!</h3>
            <h4 className={'text-publish-article ${geistSans.variable} flex items-center gap-4'}>
              19 FEBRUARY 2024 <Image src={Ellipse} alt="Gray Ellipse .svg"></Image> OLEH: CARELLIA PUTRINING P</h4>
            </div>
          </div>
        </article>
        </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default MBlog;