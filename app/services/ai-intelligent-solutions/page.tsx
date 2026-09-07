import ServiceDetail from "@/components/ServiceDetail";
import { serviceCatalog } from "@/lib/serviceCatalog";
const service = serviceCatalog.find(item => item.slug === "ai-intelligent-solutions")!;
export const metadata = { title: "AI & Intelligent Solutions | Cybertech Marketing", description: service.subtitle };
export default function Page() { return <ServiceDetail service={service} />; }
