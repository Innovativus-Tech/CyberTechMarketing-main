import ServiceDetail from "@/components/ServiceDetail";
import { serviceCatalog } from "@/lib/serviceCatalog";
const service = serviceCatalog.find(item => item.slug === "web-development")!;
export const metadata = { title: "Web Development | Cybertech Marketing", description: service.subtitle };
export default function Page() { return <ServiceDetail service={service} />; }
