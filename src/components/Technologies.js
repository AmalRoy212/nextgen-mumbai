import React from "react";
import workatoLogo from "../assets/images/workato UIC.svg";
// import makeLogo from "../assets/images/makeUIC.svg";
import solaceLogo from "../assets/images/solaceUIC.svg";
import denodoLogo from "../assets/images/denodoUIC.svg";
import kissflowLogo from "../assets/images/kissflowUIC.svg";
import salesforce from "../assets/images/Salesforce.com_logo.png";
// import dbtLogo from "../assets/images/dbtUIC.svg";
// import exalateLogo from "../assets/images/exalateUIC.svg";
import cleverflowLogo from "../assets/images/CleverflowLogoImageUIC.avif";
import logo11 from "../assets/images/tibcologo.jpeg";
// import logo12 from "../assets/images/logosom.jpeg";
// import odooLogo from "../assets/images/OdooUIC.svg";
import HighlightText from "./HighlightText";

const Technologies = () => {
  return (
    <div className="bg-white max-w-[1250px] py-14 px-8  mt-10 flex flex-col">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="lg:w-[100%] text-black text-center uppercase text-4xl font-mullish font-bold">

          Our Technology
          <HighlightText text=" Partners" />
        </h1>
        <div className="w-1/3 h-1 mt-1 bg-black mx-auto"></div>
        {/* <p className="text-lg font-semibold text-gray-600 mt-7">
          Nurturing Innovation and Growth Through Trusted Alliances and
          Strategic Collaborations
        </p> */}
      </div>

      <div className="flex flex-wrap justify-center items-center mt-12 gap-3">
        <img src={workatoLogo} alt="Workato" className="h-56 w-auto md:ml-[-5rem]" />
        {/* <img src={makeLogo} alt="Make" className="h-11 w-auto" /> */}
        <img src={solaceLogo} alt="Solace" className="h-32 w-auto md:mr-20 md:ml-10" />
        <img src={denodoLogo} alt="Denodo" className="h-16 w-auto mb-5" />
        {/* <img src={dbtLogo} alt="dbt" className="h-10 w-auto" /> */}
        {/* <img src={logo11} alt="exalate" className="h-20 w-auto md:-ml-10" /> */}
        <img src={salesforce} alt="exalate" className="h-28 w-auto md:ml-14" />
        <img src={kissflowLogo} alt="KissFlow" className="h-80 w-auto " />
        {/* <div className="flex gap-2 justify-end items-end text-black">
          <img src={cleverflowLogo} alt="cleverflow" className="h-16 w-auto" />
          <p className="text-2xl sm:text-2xl md:text-5xl mb-2  font-bold font-sans  text-center text-black">
            CleverFlow
          </p>
        </div> */}
        {/* <img src={odooLogo} alt="odoo" className="h-11 w-auto ml-48 mb-1" /> */}
      </div>
    </div>
  );
};

export default Technologies;