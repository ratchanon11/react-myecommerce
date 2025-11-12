import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const products = [
    { id: 1, title: "Gaming Laptop", desc: "Intel i7, RTX 3060, 16GB RAM", image: "https://i5.walmartimages.com/asr/6391df71-49fa-431f-bf29-69227e5cb051.291eac8369234f0761f536d52fa8ec50.jpeg" },
    { id: 2, title: "Workstation PC", desc: "AMD Ryzen 9, RTX 3090, 32GB RAM", image: "https://m.media-amazon.com/images/I/81sHPv5jzgL._AC_SL1500_.jpg" },
    { id: 3, title: "Mechanical Keyboard", desc: "RGB, Cherry MX Red switches", image: "https://tse4.mm.bing.net/th/id/OIP.bqZyulKimrQViviNgttEyAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 4, title: "Gaming Mouse", desc: "16000 DPI, RGB Lighting", image: "https://img.freepik.com/premium-photo/gaming-mouse-with-rgb-led-light-creative-ai_634423-3705.jpg?w=2000" },
    { id: 5, title: "27'' 4K Monitor", desc: "IPS, 144Hz, HDR", image: "https://img.baba-blog.com/2024/06/photorealistic-shot-of-the-Aemium-monitor-in-black-and-red-colors.png?x-oss-process=style%2Flarge" },
    { id: 6, title: "Headset", desc: "Surround 7.1, Noise-canceling", image: "https://tse2.mm.bing.net/th/id/OIP.e-uW3kMIgEm58SQm6BJR_gHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 7, title: "SSD 1TB", desc: "NVMe M.2, Fast Boot", image: "https://cdn.mos.cms.futurecdn.net/AsPh9EMCZzVTWVb3Tx2Nre.jpg" },
    { id: 8, title: "RAM 16GB", desc: "DDR4, 3200MHz", image: "https://tse4.mm.bing.net/th/id/OIP.lPU9PabAywTZkuWddPyTZwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 9, title: "Graphics Card RTX 3080", desc: "10GB GDDR6X, High-end gaming", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468933cv17d.jpg" },
    { id: 10, title: "Power Supply 750W", desc: "80+ Gold Certified", image: "https://www.awd-it.co.uk/media/wysiwyg/MSI_MAG_A750GL_PCIE5_2.jpeg" },
    { id: 11, title: "Gaming Chair", desc: "Ergonomic, Adjustable RGB", image: "https://cf.shopee.co.th/file/5494a14c948481c16a54e5f3afe7a433" },
    { id: 12, title: "Motherboard", desc: "ATX, Supports Ryzen 5000", image: "https://tse2.mm.bing.net/th/id/OIP.W9Ky-WDLM5TZrlEk9eC8JQHaG5?pid=ImgDet&w=474&h=441&rs=1&o=7&rm=3" },
    { id: 13, title: "CPU Cooler", desc: "Liquid Cooling, RGB Fans", image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/EL/TR/LN/2822525/product-jpeg-500x500.jpg" },
    { id: 14, title: "External Hard Drive", desc: "2TB, USB 3.1", image: "https://laz-img-sg.alicdn.com/p/0f1fa438cd0e19d3644f7d7dcd452739.jpg" },
    { id: 15, title: "Gaming Desk", desc: "Large Surface, Cable Management", image: "https://m.media-amazon.com/images/I/515DByKzkEL._SL600_.jpg" },
    { id: 16, title: "Webcam HD", desc: "1080p, Plug & Play", image: "https://item-shopping.c.yimg.jp/i/n/asuka-stote_xd-q18_12" },
    { id: 17, title: "Microphone", desc: "Studio-quality, USB", image: "https://img.freepik.com/free-photo/black-standing-microphone-studio_140725-7934.jpg" },
    { id: 18, title: "Laptop Cooling Pad", desc: "3 Fans, Adjustable Height", image: "https://www.laptopplus.com.au/images/thumbs/0006628_cooling-pad-stand.jpeg" },
    { id: 19, title: "Router WiFi 6", desc: "High-speed, Dual Band", image: "https://m.media-amazon.com/images/I/619znf6BzfL._AC_.jpg" },
    { id: 20, title: "VR Headset", desc: "Immersive VR Experience", image: "https://img.freepik.com/premium-photo/3d-360-vr-headset-glasses-goggles-lenses-futuristic-purple-neon-light-table-virtual-augmented_1193419-146.jpg" },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-200 min-h-screen font-dark overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

        .font-dark { font-family: 'Russo One', sans-serif; }

        .text-glow-cyan { 
          text-shadow: 
            0 0 6px #00ffff, 
            0 0 12px #00ffff, 
            0 0 24px #00ffff, 
            0 0 48px rgba(0, 255, 255, 0.7);
          color: #aefcff; 
        }

        /* ปรับตอนกดปุ่มให้แสงดรอปลงนิดนึง */
        .glow-btn { 
          transition: all 0.25s ease-in-out; 
        }
        .glow-btn:hover { 
          box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; 
          transform: scale(1.05); 
        }
        .glow-btn:active { 
          box-shadow: 0 0 5px #009999, 0 0 10px #009999; 
          transform: scale(0.97); 
          background-color: #0891b2; /* ดรอปลงเล็กน้อย */
        }

        .card-glow { transition: all 0.3s ease-in-out; position: relative; z-index: 10; }
        .card-glow:hover { box-shadow: 0 0 12px #00ffff, 0 0 25px #00ffff; transform: scale(1.03); }

        .lightning-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1599058917214-c0b9b5937d3c?auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          z-index: 0;
          animation: lightning 2s infinite;
        }
        @keyframes lightning {
          0%,20%,50%,70%,90%,100% { opacity: 0.15; }
          10%,30%,60%,80% { opacity: 0.4; }
        }

        .lightning-strike::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid #00ffff;
          box-shadow: 0 0 8px #00ffff, 0 0 16px #00ffff, 0 0 24px #00ffff;
          pointer-events: none;
          z-index: 20;
          animation: lightning-up 0.5s ease-out forwards;
        }
        @keyframes lightning-up {
          0% { transform: translateY(100%); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
      `}</style>

      <div className="absolute inset-0 lightning-bg pointer-events-none"></div>

      <Header />

      <main className="relative z-10 py-12 px-6">
        <h1 className="text-4xl text-center mb-10 text-glow-cyan font-extrabold animate-pulse">
          💀 Dark Product 💀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 card-glow relative overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-75 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl text-glow-cyan mb-2">{product.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{product.desc}</p>
              <button
                className="glow-btn bg-cyan-600 text-white px-4 py-1 rounded-full hover:bg-cyan-500 w-full"
                onClick={(e) => {
                  const card = e.currentTarget.parentElement;
                  card.classList.add("lightning-strike");
                  setTimeout(() => card.classList.remove("lightning-strike"), 500);
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
