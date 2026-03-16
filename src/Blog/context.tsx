import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type QueryType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
};

const QueryContext = createContext<QueryType>({
  query: "",
  setQuery: () => {},
  tag: "",
  setTag: () => {},
});

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  return (
    <QueryContext.Provider value={{ query, setQuery, tag, setTag }}>
      {children}
    </QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
