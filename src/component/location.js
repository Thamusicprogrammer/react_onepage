import Image from "next/image";

export default function Location({ isDarkMode }) {
  return (
    <section className={`iframe ${isDarkMode ? "dark-mode" : ""}`} id="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.206238978464!2d6.310665551482393!3d4.931030920719006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a055be1dcce59%3A0xa6c5b6a97ac6c1a!2sNitro%20Studios!5e0!3m2!1sen!2sng!4v1727526895070!5m2!1sen!2sng"
        width="100%"
        height={550}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Image
        id="topGreyBottom"
        src="/shape-top-grey-80.png" // Default image for light mode
        className="img-4"
        alt="wave"
        width={1700}
        height={100}
      />
    </section>
  );
}
