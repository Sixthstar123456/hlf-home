import Image from "next/image";
import {
  MapPin,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen ">
      <section className="py-8 px-4 max-w-7xl mx-auto">
        {/* Header */}
    

        {/* Main Content Grid */}
       <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
  {/* Left Column (Mobile: contains heading and paragraphs) */}
  <div className="flex flex-col gap-6 order-1 lg:order-1">
    {/* Heading - order 1 on all */}
    <div className="order-1">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center" >
        Your Future Is Our{" "}
        <span className="bg-[#0079b2] bg-clip-text text-transparent text-center">Focus!</span>
      </h2>
    </div>

    {/* Paragraph Content - order 3 on mobile, order 2 on desktop */}
    <div className="order-3 lg:order-2 bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
      <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
        Hinduja Leyland Finance is committed to empowering its customers with the right set of products,
        support, and accessibility, to help customers achieve their vision. Founded on a deeper customer connect
        that fosters a lasting relationship, we go the extra mile to make the whole experience seamless.
      </p>
      <p className="text-base text-gray-700 leading-relaxed text-justify">
        Hinduja Leyland Finance is a part of the Hinduja Group, which is a diversified global business group
        with a track record of growing business in several industries.
      </p>
    </div>
  </div>

  {/* Right Column (Image) - appears 2nd on mobile, 2nd column on desktop */}
  <div className="order-2 lg:order-2 flex items-center justify-center h-full">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750053903/ist_dinred.jpg"
          alt="Happy customer with commercial vehicle"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>


        {/* Feature Cards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hinduja Leyland Finance?
            </h3>
            
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-100 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-[#0079b2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg  text-gray-900 mb-2">Spread across 1750+ Locations</h4>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-100 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-[#0079b2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg  text-gray-900 mb-2">Accessible to every customer across India</h4>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-100 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-[#0079b2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg  text-gray-900 mb-2">One-of-a-kind, Unique credit assessment model</h4>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-100 rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-[#0079b2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg  text-gray-900 mb-2">Hassle free <br/> Loan processing</h4>
            </div>
          </div>
        </div>




        {/* CTA Section */}
        <div className="bg-[#0079b2] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-3xl lg:text-3xl font-bold mb-6">
              Ready to Transform Your Future?
            </h3>
            <p className="text-base mb-8 opacity-90 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust Hinduja Leyland Finance for their financial needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0079b2] hover:bg-gray-100 text-base px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center shadow-lg">
                Apply for Loan
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-base px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        
      </section>
    </div>
  );
}
