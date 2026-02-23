import PropTypes from "prop-types";
import { PhoneIcon, InboxIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { MapPinIcon as MapPinIconOutline } from "@heroicons/react/24/outline";
import {
  SiGithub,
  SiTailwindcss,
  SiReact,
} from "@icons-pack/react-simple-icons";

function LinkedinIcon(props) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

import img from "./picture.png";
import { formatItems } from "./helpers";

const CONTACT_ITEMS = [
  {
    key: "email",
    Icon: InboxIcon,
    href: "mailto:david@isyt.dev",
    content: "david@isyt.dev",
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
    Icon: LinkedinIcon,
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
  "REST/GraphQL API",
  "MongoDB/PostgreSQL",
  "Jest/Vitest",
  "Playwright",
  "CloudWatch/LogInsights",
]);

function AsideSection({ title, children }) {
  return (
    <section className="mx-2 text-sm">
      <h5 className="text-lg my-4 py-1 px-2 text-center rounded-r-lg border-slate-300 border-2 border-l-0 bg-slate-100 -ml-2">
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
        className="object-cover overflow-hidden object-bottom h-32 w-32 mt-4 rounded-full m-auto bg-linear-to-t from-slate-300 to-slate-100 border-2 border-slate-300"
        src={img}
        alt="logo"
      />
      <AsideSection title="Contact">
        <ul className="space-y-1">
          {CONTACT_ITEMS.map(({ key, Icon, content, href }) => (
            <li key={key}>
              <a href={href} className="flex items-center">
                <span className="grow-0">
                  <Icon className="h-4 w-4 mr-1 text-slate-600" />
                </span>
                <span className="grow">{content}</span>
              </a>
            </li>
          ))}
        </ul>
      </AsideSection>
      <AsideSection title="Education">
        <ul className="space-y-4">
          {EDUCATION_ITEMS.map(({ key, year, title, school }) => (
            <li key={key}>
              <p className="text-sm text-slate-600">{year}</p>
              <p>{title}</p>
              <p className="text-sm text-slate-600 flex items-center">
                <span className="grow-0">
                  <MapPinIconOutline className="h-4 w-4 inline-block mr-1" />
                </span>
                <span className="grow">{school}</span>
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
