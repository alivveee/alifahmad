import { socials } from "../utils/data";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-container padding-container">
        <div className="flex flex-col justify-between items-start mb-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('footer.title')}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-3xl">
              {t('footer.desc')}
            </p>

            <div className="flex flex-wrap gap-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-zinc-300 transition-colors"
                >
                  {social.name} <FiArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="/CV_Alif Ahmad Mukhtar Darma Hidayat_Frontend Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors font-medium"
            >
              {t('footer.resume')}
            </a>
          </div>

          <small className="text-zinc-400">
            &copy; 2026 Alif Ahmad, Indonesia
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
