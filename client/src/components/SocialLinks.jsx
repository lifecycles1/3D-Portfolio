import { socialLinks } from "../constants";

const SocialLinks = () => {
  return (
    <div className="flex space-x-5">
      {socialLinks.map((link, index) => {
        const isExternal = link.name !== "Contact";
        return (
          <a href={link.link} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} key={index} className="flex items-center gap-2 font-poppins">
            <img src={link.iconUrl} alt={link.name} className="w-6 h-6 object-contain" />
            <p className="font-semibold text-sm">{link.name}</p>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
