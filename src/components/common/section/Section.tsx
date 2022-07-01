import React from "react";
import { getAlignmentClassName } from "../../../util/alignment";
import SectionArticle from "./SectionArticle";

interface ISectionArticle {
  title?: string;
  url?: string;
  image?: string;
  category?: {
    text?: string;
    url?: string;
  };
}
interface ISectionProps {
  alignment?: "left" | "full" | "right";
  articles: ISectionArticle[];
}

function Section({ alignment = "left", articles }: ISectionProps) {
  const alignmentClass: string = getAlignmentClassName(alignment);
  const featured = articles?.length > 3 ? 2 : 1;

  return (
    <section
      className={`${alignmentClass} flex gap-5 md:flex-row mb-6 flex-col-reverse`}
    >
      <div className="flex flex-col basis-2/6 grow-0 shrink-0 gap-5 justify-between">
        {articles &&
          articles
            .slice(featured)
            .map((article: ISectionArticle, index: number) => (
              <SectionArticle
                key={`section-article-${index}`}
                classes="text-lg"
                article={article}
              />
            ))}
      </div>
      <div className="flex flex-col gap-5">
        {articles &&
          articles
            .slice(0, featured)
            .map((article: ISectionArticle, index: number) => (
              <SectionArticle
                key={`section-article-featured-${index}`}
                article={article}
                classes="text-lg lg:text-2xl"
              />
            ))}
      </div>
    </section>
  );
}

export default Section;
