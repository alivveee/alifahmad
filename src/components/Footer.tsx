import { socials } from "../utils/data";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer data-bg-color="#010208" className="relative z-10 w-full bg-transparent text-white pt-32 pb-12 overflow-hidden border-t border-white/[0.03]">
      <div className="relative z-10 max-container padding-container flex flex-col items-center">
        {/* End of Journey Marker */}
        <div className="flex flex-col items-center gap-8 mb-24">
          <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-light text-ocean-text tracking-wide text-center drop-shadow-lg">
            "Still exploring deeper possibilities."
          </h2>
        </div>

        {/* Links and Info Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ocean-text/30 font-semibold mb-2">
              Connect
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-ocean-text/60 hover:text-glow-blue font-medium transition-all duration-300"
                >
                  {social.name}{" "}
                  <FiArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Resume and Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ocean-text/30 font-semibold mb-2">
              Resources
            </h3>
            <a
              href="/CV_Alif Ahmad Mukhtar Darma Hidayat_Frontend Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm text-ocean-text/60 hover:text-glow-blue transition-all duration-300 font-medium"
            >
              {t("footer.resume")}{" "}
              <FiArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
            <small className="text-ocean-text/30 mt-6 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} Alif Ahmad, Indonesia
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
