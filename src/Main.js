import PropTypes from "prop-types";
import { MapPinIcon, LinkIcon } from "@heroicons/react/24/outline";

import { formatItems } from "./helpers";

const ABOUT_ME =
  "I am a French professional living in Belgium with a deep passion for building software. Over the years, I have honed my skills as a software developer and, more recently, shifted my focus towards leading and mentoring teams. I find immense joy in helping others grow and succeed in their roles. With 11 years of experience in the software development industry, I have not only excelled in technical aspects but also in fostering collaborative and innovative environments. I am dedicated to continuous learning and thrive in dynamic, team-oriented settings.";
const WORK_ITEMS = [
  {
    key: "luzmo",
    startMonth: "Nov",
    startYear: "2021",
    endMonth: "Nov",
    endYear: "2023",
    title: "Backend Team Lead",
    company: "Luzmo",
    link: "https://luzmo.com",
    location: "Leuven/remote – Belgium",
    accomplishments: formatItems([
      "Led a team of 7 members with limit WIP and continuous delivery principles.",
      "Rescoped the team to 3 specific domains to bring focus and autonomy.",
      "Moved away from Gitflow to trunk-based development.",
      "Data migration from Cassandra to ClickHouse.",
      "Coaching and refactoring on code using streaming.",
    ]),
  },
  {
    key: "urbantz",
    startMonth: "Feb",
    startYear: "2020",
    endMonth: "Oct",
    endYear: "2021",
    title: "Technical Lead Developer",
    company: "Urbantz",
    link: "https://urbantz.com",
    location: "Leuven/remote – Belgium",
    accomplishments: formatItems([
      "Led a team of 5 developers, collaborating with mob sessions.",
      "Setup better tools for unit and end-to-end tests.",
      "Adoption of continuous deployment and feature-flags.",
      "Identifed/fixed root causes of some performance issues.",
      "Improved monitoring with insightful metrics.",
    ]),
  },
  {
    key: "datacamp",
    startMonth: "Oct",
    startYear: "2017",
    endMonth: "Nov",
    endYear: "2019",
    title: "Full-stack Developer",
    company: "Datacamp",
    link: "https://datacamp.com",
    location: "Leuven – Belgium",
    accomplishments: formatItems([
      "Modernization of the build/deployment process.",
      "Setup better practices (linter, unit/e2e tests, error monitoring).",
      "Refactored application boot to allow server-side rendering.",
    ]),
  },
  {
    key: "azendoo",
    startMonth: "Sep",
    startYear: "2012",
    endMonth: "Sep",
    endYear: "2017",
    title: "Full-stack Developer",
    company: "Azendoo",
    location: "Bordeaux – France",
    accomplishments: formatItems([
      "Migration from Backbone to React.",
      "Build desktop application with Electron.",
      "Third-party integrations (Box, Dropbox, Slack, Cisco Spark, ...).",
      "SSO implementation with SAML protocol.",
    ]),
  },
];

function MainSection({ title, children }) {
  return (
    <section>
      {title && <h3 className="px-4 py-2 text-lg bg-slate-200">{title}</h3>}
      <div className="border-2 border-r-0 border-slate-300 bg-slate-100 p-4 rounded-l-md text-sm text-justify">
        {children}
      </div>
    </section>
  );
}
MainSection.propTypes = {
  title: PropTypes.string,
  childe: PropTypes.element,
};

function WorkExperienceItem({
  startMonth,
  startYear,
  endMonth,
  endYear,
  title,
  company,
  link,
  location,
  accomplishments,
  isLast,
}) {
  return (
    <div className={`${isLast ? "" : "mb-4"} text-left`}>
      <div className="flex text-base">
        <div className="grow">
          <span className="font-bold">{title}</span> - {company}
        </div>
        <div className="grow-0">
          {startMonth} {startYear} – {endMonth} {endYear}
        </div>
      </div>
      <div className="text-slate-500  mb-1">
        <MapPinIcon className="h-4 w-4 inline-block mr-1 stroke-1" />
        {location}{" "}
        {link && (
          <a href={link} className="ml-2">
            <LinkIcon className="h-4 w-4 inline-block mr-1 stroke-1" />
            {link}
          </a>
        )}
      </div>
      <ul className="list-disc pl-4">
        {accomplishments.map(({ key, content }) => (
          <li key={key}>{content}</li>
        ))}
      </ul>
    </div>
  );
}
WorkExperienceItem.propTypes = {
  startMonth: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endMonth: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  link: PropTypes.string,
  location: PropTypes.string.isRequired,
  accomplishments: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isLast: PropTypes.bool.isRequired,
};

function Main() {
  return (
    <main className="basis-2/3 pl-2">
      <div className="mt-4" />
      <MainSection>
        <h1 className="text-4xl font-bold mt-2">David Fournier</h1>
        <h2 className="mt-2 text-xl mb-2">
          {" "}
          Technical Lead / Senior Full Stack developer
        </h2>
      </MainSection>
      <MainSection title="About me">{ABOUT_ME}</MainSection>
      <MainSection title="Work Experience">
        {WORK_ITEMS.map(({ key, ...props }, index) => (
          <WorkExperienceItem
            key={key}
            {...props}
            isLast={index === WORK_ITEMS.length - 1}
          />
        ))}
      </MainSection>
    </main>
  );
}

export default Main;
