import { RootHtml } from "../_shared/RootHtml";

export default function HuLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="hu">{children}</RootHtml>;
}
