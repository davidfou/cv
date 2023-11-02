import PropTypes from "prop-types";
import { PhoneIcon, InboxIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { MapPinIcon as MapPinIconOutline } from "@heroicons/react/24/outline";
import {
  SiGithub,
  SiLinkedin,
  SiTailwindcss,
  SiReact,
} from "@icons-pack/react-simple-icons";

import img from "./picture.png";
import { formatItems } from "./helpers";

const CONTACT_ITEMS = [
  {
    key: "email",
    Icon: InboxIcon,
    href: "mailto:fr.david.fournier@gmail.com",
    content: "fr.david.fournier@gmail.com",
  },
  {
    key: "phone",
    Icon: PhoneIcon,
    href: "tel:+32476742240",
    content: "+32 476 74 22 40",
  },
  {
    key: "address",
    Icon: MapPinIcon,
    href: "https://osm.org/go/0JZDp-?relation=1245638",
    content: "Heusden-Zolder (Belgium)",
  },
  {
    key: "github",
    Icon: SiGithub,
    href: "https://github.com/davidfou",
    content: "github.com/davidfou",
  },
  {
    key: "linkedin",
    Icon: SiLinkedin,
    href: "https://www.linkedin.com/in/davidfou/",
    content: "linkedin.com/in/davidfou",
  },
];

const EDUCATION_ITEMS = [
  {
    key: "bachelor",
    year: "2008 – 2011",
    title: "Bachelor in Telecommunications Engineering",
    school: "ENSEIRB-MATMECA (France)",
  },
  {
    key: "master",
    year: "2010 – 2011",
    title: "Master of Signal Processing",
    school: "Bordeaux I university (France)",
  },
];

const SKILL_ITEMS = formatItems([
  "JavaScript/TypeScript",
  "React",
  "Node.js",
  "MongoDB/PostgreSQL",
  "Jest/Vitest",
  "Playwright",
  "CloudWatch/LogInsights",
]);

function AsideSection({ title, children }) {
  return (
    <section className="mx-2 text-sm">
      <h5 className="text-lg my-4 py-1 px-2 text-center rounded-r-lg shadow-inner border-slate-300 border-2 border-l-0 bg-slate-100 -ml-2">
        {title}
      </h5>
      <div className="px-2">{children}</div>
    </section>
  );
}
AsideSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

function Aside() {
  return (
    <aside className="basis-1/3 bg-slate-200 min-h-full relative">
      <img
        className="object-cover overflow-hidden object-bottom h-32 w-32 mt-4 rounded-full m-auto bg-gradient-to-t from-slate-300 to-slate-100 shadow-inner border-2 border-slate-300"
        src={img}
        alt="logo"
      />
      <AsideSection title="Contact">
        <ul>
          {CONTACT_ITEMS.map(({ key, Icon, content, href }) => (
            <li className="my-1" key={key}>
              <a href={href} className="flex items-center">
                <span className="flex-grow-0">
                  <Icon className="h-4 w-4 mr-1 text-slate-600" />
                </span>
                <span className="flex-grow-1">{content}</span>
              </a>
            </li>
          ))}
        </ul>
      </AsideSection>
      <AsideSection title="Education">
        <ul>
          {EDUCATION_ITEMS.map(({ key, year, title, school }) => (
            <li key={key} className="mb-4">
              <p className="text-sm text-slate-600">{year}</p>
              <p>{title}</p>
              <p className="text-sm text-slate-600 flex items-center">
                <span className="flex-grow-0">
                  <MapPinIconOutline className="h-4 w-4 inline-block mr-1" />
                </span>
                <span className="flex-grow-1">{school}</span>
              </p>
            </li>
          ))}
        </ul>
      </AsideSection>
      <AsideSection title="Languages">
        French (native), English (C1), Dutch (A1)
      </AsideSection>
      <AsideSection title="Skills">
        <ul className="pl-4 list-disc list-outside">
          {SKILL_ITEMS.map(({ key, content }) => (
            <li key={key}>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </AsideSection>
      <AsideSection title="Side project">
        <div className="mb-1">Conventional: comments (browser extension)</div>
        <div className="mb-1">
          Browser extension to add a comment box to GitHub/GitLab pull requests
        </div>
        <div className="text-slate-600">
          <a href="https://github.com/davidfou/conventionalcomments-web-extension ">
            github.com/davidfou/conventionalcomments-web-extension
          </a>
        </div>
      </AsideSection>
      <div className="absolute bottom-4 inset-x-4 text-xs text-center text-slate-600">
        Made with <SiTailwindcss className="inline h-3 w-3" />
        Tailwind & <SiReact className="inline h-3 w-3" />
        React
      </div>
    </aside>
  );
}

export default Aside;
