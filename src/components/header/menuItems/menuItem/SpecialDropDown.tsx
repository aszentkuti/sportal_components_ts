import React from "react";

interface IColumn {
  title?: string;
  items?: IItem[];
}

interface IItem {
  text?: string;
  url?: string;
  image?: string;
  withTables?: boolean;
}

interface ISpecialDropDownProps {
  items: IColumn[];
  show: boolean;
}

function SpecialDropDown({ items, show }: ISpecialDropDownProps) {
  return (
    <div
      className={`${
        show ? "animate-fade-in" : "animate-fade-out"
      } invisible absolute grid grid-cols-3 gap-6 w-[850px] dark:bg-dark-accent bg-white shadow-md dark:shadow-dark-accent shadow-slate-300 bottom-0 left-0 translate-y-full z-20 p-5`}
    >
      {items.map((column: IColumn, cIndex: number) => (
        <div key={`special-dropdown-column-${cIndex}`}>
          <a href="/összeshir">
            <h2 className="font-semibold mb-5 text-xl hover:text-brand-red transition-colors">
              {column.title}
            </h2>
          </a>
          <ul className="flex flex-col gap-5">
            {column?.items?.map((item: IItem, iIndex: number) => (
              <li
                key={`special-dropdown-item-${iIndex}`}
                className="flex gap-3 items-center"
              >
                <a
                  className="flex grow-0 shrink-0 basis-[40px]"
                  href={item.url}
                >
                  <img src={item.image} alt={item.text} />
                </a>
                <div className="flex flex-col justify-center">
                  <a
                    className="hover:text-brand-red transition-colors durations-300"
                    href={item.url}
                  >
                    <h3 className="font-semibold text-lg leading-tight">
                      {item.text}
                    </h3>
                  </a>
                  {item.withTables && (
                    <div className="flex gap-2">
                      <a
                        className="hover:underline text-xs text-brand-red font-semibold"
                        href="/csapatok"
                      >
                        Csapatok
                      </a>
                      <span className="text-xs font-bold text-brand-red">
                        /
                      </span>
                      <a
                        className="hover:underline text-xs text-brand-red font-semibold"
                        href="/eredmeny"
                      >
                        Eredmények
                      </a>
                      <span className="text-xs font-bold text-brand-red">
                        /
                      </span>
                      <a
                        className="hover:underline text-xs text-brand-red font-semibold"
                        href="/tábla"
                      >
                        Táblák
                      </a>
                    </div>
                  )}
                </div>
              </li>
            ))}
            <li className="mt-4 pt-4 w-full border-t">
              <a
                className="text-brand-red font-semibold hover:underline"
                href="/összeshir"
              >
                Összes hír
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SpecialDropDown;
