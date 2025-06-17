"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-sm">
      {/* Top Section */}
      <div className="bg-[#004a8f] py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Customer Care</a></li>
              <li><a href="#" className="hover:underline">CSR</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">We Finance</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">We Finance</a></li>
              <li><a href="#" className="hover:underline">Commercial Vehicle</a></li>
              <li><a href="#" className="hover:underline">Construction Equipment</a></li>
              <li><a href="#" className="hover:underline">Personal Vehicle</a></li>
              <li><a href="#" className="hover:underline">Loan Against Property</a></li>
              <li><a href="#" className="hover:underline">MSME Loans</a></li>
              <li><a href="#" className="hover:underline">Leasing</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Customer Education Literature</a></li>
              <li><a href="#" className="hover:underline">Secured assets possessed under the SARFAESI Act, 2002</a></li>
              <li>
                <a href="#" className="hover:underline">
                  Procedure for return of original immovable property documents to the legal heirs in case of demise of borrowers
                </a>
              </li>
              <li><a href="#" className="hover:underline">Fair Practices Code</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Investors</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Company Policies</a></li>
              <li><a href="#" className="hover:underline">Financial</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-3">Registered Office</h4>
            <p className="text-white/90 text-sm leading-relaxed">
              Plot No. C-21, Tower C (1–3 floors), G Block, Bandra Kurla Complex,<br />
              Bandra (E), Mumbai – 400051
            </p>

            <h4 className="font-semibold mt-4 mb-2">Corporate Office and Communication Address</h4>
            <p className="text-white/90 text-sm leading-relaxed">
              No. 27 A, Developed Industrial Estate,<br />
              Guindy, Chennai – 600032<br />
              <strong>Toll Free:</strong> 1800 202 2500
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00b5d9] text-xs text-center px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>copyright @ Hinduja Leyland Finance Ltd.</span>
          <div className="space-x-2">
            <a href="#" className="hover:underline">Terms of Usage</a> |
            <a href="#" className="hover:underline">Data Privacy Policy</a> |
            <span>CIN: U65993MH2008PLC384221</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
