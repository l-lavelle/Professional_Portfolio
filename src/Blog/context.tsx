import { createContext, useState, type ReactNode } from "react";

type QueryType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const QueryContext = createContext<QueryType>({
  query: "",
  setQuery: () => {},
});

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
