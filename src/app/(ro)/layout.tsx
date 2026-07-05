import { RootHtml } from "../_shared/RootHtml";

export default function RoLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="ro">{children}</RootHtml>;
}
