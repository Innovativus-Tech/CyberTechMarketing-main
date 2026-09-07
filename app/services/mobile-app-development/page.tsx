import ServiceDetail from "@/components/ServiceDetail";
import { serviceCatalog } from "@/lib/serviceCatalog";
const service = serviceCatalog.find(item => item.slug === "mobile-app-development")!;
export const metadata = { title: "Mobile App Development | Cybertech Marketing", description: service.subtitle };
export default function Page() { return <ServiceDetail service={service} />; }
