import React from "react";
import CategoryDecorElem from "../../../images/CategoryDecorElem";

interface ISectionArticle {
  title?: string;
  url?: string;
  image?: string;
  category?: {
    text?: string;
    url?: string;
  };
}

interface ISectionArtileProps {
  classes?: string;
  article: ISectionArticle;
}

function SectionArticle({ article, classes }: ISectionArtileProps) {
  return (
    <article
      className={`${classes} flex flex-col h-full rounded-xl shadow-slate-300 dark:shadow-dark-accent shadow-md dark:shadow-lg dark:bg-dark-accent hover:scale-[1.015] transition-transform`}
    >
      <div className="relative h-full">
        <a href={article.url}>
          <picture>
            <img
              className="block aspect-[3/2] w-full object-cover h-full rounded-t-xl"
              src={article?.image}
              alt={article?.title}
            />
          </picture>
        </a>
        <div className="absolute -bottom-[1px] left-0 flex max-h-[25px]">
          <a
            href={article?.category?.url}
            className="text-brand-red font-medium bg-white dark:bg-dark-accent pl-4 z-10 pt-2 hover:underline text-sm"
          >
            {article?.category?.text}
          </a>
          <div className="absolute right-0 translate-x-[175px] -ml-[1px] text-white dark:text-dark-accent">
            <CategoryDecorElem />
          </div>
        </div>
      </div>
      <a
        href={article?.url}
        className="block p-4 isolate hover:text-brand-red transition-colors"
      >
        <div className="font-bold">{article?.title}</div>
      </a>
    </article>
  );
}

export default SectionArticle;
