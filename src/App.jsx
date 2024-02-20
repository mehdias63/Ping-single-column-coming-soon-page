import React from "react";
import EmailForm from "./components/EmailForm";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4 py-12">
      <div className="font-libre text-center">
        <h3 className="text-xl md:text-[2rem] font-bold text-black mt-2 mb-8">
          PING<span className="text-blue">.</span>
        </h3>
        <h1 className="text-[1.375rem] md:text-5xl text-gray font-light leading-8 md:leading-[3.75rem] mb-4">
          We are launching<span className="font-bold text-black"> soon!</span>
        </h1>
        <p className="text-xs md:text-xl font-libre text-black mb-8">
          Subscribe and get notified
        </p>
      </div>
      <EmailForm />
      <div className="max-w-[36rem] mt-[4rem] mb-14 p-6">
        <img src="/images/illustration-dashboard.png" alt="illustration" />
      </div>
      <div className="flex gap-6 mb-6 mt-12 ">
        <a className="a-link" href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a className="a-link" href="https://twitter.com">
          <FaTwitter />
        </a>
        <a className="a-link" href="https://instagram.com">
          <FaInstagram />
        </a>
      </div>
      <footer className="text-[0.625rem] md:text-xs font-libre text-gray">
        © Copyright Ping. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
