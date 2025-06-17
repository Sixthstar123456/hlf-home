import Image from "next/image";
import Header from "../../components/header";
import FinancingSlider from "../../components/slider";
import ProductCarousel from "../../components/product";
import About from "../../components/about";
import Calculator from "../../components/emi-calculator";
import Footer from "../../components/footer";
export default function Home() {
  return (
<div
  className="min-h-screen"
  style={{
    background: "linear-gradient(135deg, #E0F2FE 0%, white 15%, #EFF6FF 35%, #E0E7FF 50%, #F3F4F6 65%, #E5E7EB 80%, #FFFFFF 100%)"
  }}
>  <Header/>
  <FinancingSlider/>
  <ProductCarousel/>
  <About/>

  <Footer/>
 </div>
  );

}
