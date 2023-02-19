import React from 'react';
import { BsCardImage } from "react-icons/bs";
import blog2 from "../../assets/blog images/blog2.jpg";
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {VscComment} from 'react-icons/vsc'

const Categories = () => {
    return (
        <div className="w-72 lg:mx-0 mx-auto" style={{ height: "29rem" }}>
      <img className="rounded-lg" src={blog2} alt="" />
      <h3 className="font-bold my-2">
        Business Partners Work at Modern Office
      </h3>
      <div className="h-0.5 bg-slate-800 w-1/2 my-2"></div>
      <div className="my-3">
        <div className="flex gap-3">
          <h2 className="text-slate-600 font-semibold text-sm">ALIA STONE</h2>
          <p className="flex justify-center items-center gap-1 text-slate-500 text-xs">
            <BsCardImage />
            Social Life
          </p>
        </div>
        <p className="text-slate-500 text-xs mt-1">JULY 10, 2019</p>
      </div>
      <p className="text-slate-500">
        It’s no secret that the digital industry is booming. From exciting
        startups to global brands, companies are reaching out to digital …
      </p>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <h4 className="font-semibold">Continue reading...</h4>
        </div>
        <div className="flex gap-3 text-lg text-slate-400 justify-center items-center">
            <AiFillFacebook/>
            <AiOutlineTwitter />
            <div className="text-slate-800 flex justify-center items-center gap-1">
                <VscComment className=""/>
                <p className="text-base font-bold">5</p>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Categories;