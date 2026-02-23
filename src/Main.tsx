import { MapPinIcon, LinkIcon } from "@heroicons/react/24/outline";

import { cn, formatItems } from "./helpers";

const ABOUT_ME =
  "Software engineer with 14 years of experience who cares as much about how a team operates as what it ships. I'm mostly influenced by Extreme Programming, Building Evolutionary Architecture and Team Topologies. In practice, this means I push for short feedback loops, shared ownership, and disciplined habits like testing after every regression. I'm at my best when I can help a team deliver steadily without heroics.";
const WORK_ITEMS = [
  {
    key: "segments",
    startMonth: "May",
    startYear: "2024",
    isPresent: true as const,
    title: "Staff Engineer",
    company: "Segments (acquired by Uber)",
    link: "https://segments.ai",
    location: "Leuven/remote – Belgium",
    accomplishments: formatItems([
      "Rebuilt the timeline from the ground up, unblocking new features and improving the user experience.",
      "Redesigned the side-effects architecture to reduce production incidents and make the codebase easier to extend.",
      "Strengthened the testing strategy, reducing regressions reaching production.",
      "Mentored 4 engineers through code reviews and pair programming.",
    ]),
  },
  {
    key: "luzmo",
    startMonth: "Nov",
    startYear: "2021",
    endMonth: "Oct",
    endYear: "2023",
    title: "Backend Team Lead",
    company: "Luzmo",
    link: "https://luzmo.com",
    location: "Leuven/remote – Belgium",
    accomplishments: formatItems([
      "Led a team of 7 applying WIP limits and continuous delivery.",
      "Restructured the team into 3 focused domains to increase autonomy.",
      "Migrated from Gitflow to trunk-based development.",
      "Migrated data from Cassandra to ClickHouse.",
      "Coached the team on Node.js streams and refactored data pipelines.",
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
      "Led a team of 5 developers using mob programming.",
      "Rolled out continuous deployment and feature flags.",
      "Built monitoring dashboards to improve incident detection and response.",
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
      "Modernized the build and deployment pipeline.",
      "Introduced linting, unit/e2e testing, and error monitoring.",
      "Refactored application boot to enable server-side rendering.",
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
      "Migrated the frontend from Backbone to React.",
      "Built a desktop application with Electron.",
      "Integrated third-party services (Box, Dropbox, Slack, Cisco Spark).",
    ]),
  },
];

interface MainSectionProps {
  title?: string;
  children?: React.ReactNode;
}

function MainSection({ title, children }: MainSectionProps) {
  return (
    <section>
      {title && <h3 className="px-4 py-2 text-lg bg-slate-200">{title}</h3>}
      <div className="border-2 border-r-0 border-slate-300 bg-slate-100 p-4 rounded-l-md text-sm text-justify space-y-4">
        {children}
      </div>
    </section>
  );
}

type WorkExperienceItemProps = {
  startMonth: string;
  startYear: string;
  title: string;
  company: string;
  link?: string;
  location: string;
  accomplishments: { key: string; content: string }[];
} & (
    | { isPresent: true; endMonth?: never; endYear?: never }
    | { isPresent?: false; endMonth: string; endYear: string }
  );

function WorkExperienceItem({
  startMonth,
  startYear,
  endMonth,
  endYear,
  isPresent,
  title,
  company,
  link,
  location,
  accomplishments,
}: WorkExperienceItemProps) {
  return (
    <div className="text-left">
      <div className="flex items-center text-base">
        <div className="grow">
          <span className="font-bold">{title}</span> - {company}
        </div>
        <div className="grow-0 text-sm">
          {startMonth} {startYear} – {isPresent ? "Present" : `${endMonth} ${endYear}`}
        </div>
      </div>
      <div className="text-slate-500 mb-1 pl-4">
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

function Main({ className }: { className?: string }) {
  return (
    <main className={cn("pt-4", className)}>
      <MainSection>
        <h1 className="text-4xl font-bold">David Fournier</h1>
        <h2 className="mt-4 text-xl">
          Code, people, delivery. In whatever order.
        </h2>
      </MainSection>
      <MainSection title="About me">{ABOUT_ME}</MainSection>
      <MainSection title="Relevant Experience">
        {WORK_ITEMS.map(({ key, ...props }) => (
          <WorkExperienceItem key={key} {...props} />
        ))}
      </MainSection>
    </main>
  );
}

export default Main;
