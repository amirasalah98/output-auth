import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featured = [
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903295/%D8%B5%D9%88%D8%B1%D8%A9_page-0001_tfkyn5.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903295/%D8%B5%D9%88%D8%B1%D8%A9_page-0002_em0fdl.jpg',
];

const carouselPosts = [
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903295/%D8%B5%D9%88%D8%B1%D8%A9_page-0003_fgyfsw.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903295/%D8%B5%D9%88%D8%B1%D8%A9_page-0004_zggoqi.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903295/%D8%B5%D9%88%D8%B1%D8%A9_page-0005_bjga4m.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903295/%D8%B5%D9%88%D8%B1%D8%A9_page-0006_rgp6io.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903296/%D8%B5%D9%88%D8%B1%D8%A9_page-0007_qdd5vd.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903296/%D8%B5%D9%88%D8%B1%D8%A9_page-0008_w9kvxv.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903296/%D8%B5%D9%88%D8%B1%D8%A9_page-0009_lrc2p3.jpg',
  'https://res.cloudinary.com/do0eee789/image/upload/v1777903296/%D8%B5%D9%88%D8%B1%D8%A9_page-0010_zn71g7.jpg',
];

function Portfolio() {
  return (
    <section style={{ padding: '60px 20px' }}>

      {/* Top: two featured images side by side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '48px'
      }}>
        {featured.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Featured ${i + 1}`}
            style={{ width: '70%',margin:'auto', borderRadius: 12, display: 'block' }}
          />
        ))}
      </div>

      {/* Middle: your text */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '12px',color: '#cfb361' }}>
          Why Output
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
We help businesses build strong digital foundations,
 reach the right audience, and achieve measurable growth through strategy, design, and technology.</p>
      </div>

      {/* Bottom: carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0:   { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {carouselPosts.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Post ${i + 1}`}
              style={{ width: '100%', borderRadius: 12, display: 'block' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Portfolio;