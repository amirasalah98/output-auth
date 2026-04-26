import "./logoScroller.css";

const logos = [
  "https://res.cloudinary.com/do0eee789/image/upload/v1777063217/Eo_circle_blue_number-1.svg_zoiin6.png",
  "https://res.cloudinary.com/do0eee789/image/upload/v1777063217/Number_2_in_light_blue_rounded_square.svg_wfyhdy.png",
  "https://res.cloudinary.com/do0eee789/image/upload/v1777063217/istockphoto-182804498-612x612_afwvz3.jpg",
  "https://res.cloudinary.com/do0eee789/image/upload/v1777063217/9543296_mj28w3.png",
  "https://res.cloudinary.com/do0eee789/image/upload/v1777063217/3840754_inhpvw.png",
];

export default function LogoScroller() {
  return (
    <div className="scroller my-5">
        <h5 className="py-4 my-2">Our Clients</h5>
      <div className="scroller__inner">
        
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="client logo" />
        ))}

        {/* duplicate for seamless loop */}
        {logos.map((logo, index) => (
          <img key={`dup-${index}`} src={logo} alt="client logo" />
        ))}
      </div>
    </div>
  );
}