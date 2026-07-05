import { RootHtml } from "../_shared/RootHtml";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
