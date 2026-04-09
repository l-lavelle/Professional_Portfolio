import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type GlobalVars = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  portfolioId: number;
  setPortfolioId: Dispatch<SetStateAction<number>>;
};

const GlobalContext = createContext<GlobalVars>({
  query: "",
  setQuery: () => {},
  tag: "All",
  setTag: () => {},
  portfolioId: 1,
  setPortfolioId: () => {},
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [tag, setTag] = useState<string>("All");
  const [portfolioId, setPortfolioId] = useState<number>(1);

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        tag,
        setTag,
        portfolioId,
        setPortfolioId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
