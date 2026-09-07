import ServiceDetail from "@/components/ServiceDetail";
import { serviceCatalog } from "@/lib/serviceCatalog";
const service = serviceCatalog.find(item => item.slug === "software-development")!;
export const metadata = { title: "Software Development | Cybertech Marketing", description: service.subtitle };
export default function Page() { return <ServiceDetail service={service} />; }
