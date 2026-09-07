import ServiceDetail from "@/components/ServiceDetail";
import { serviceCatalog } from "@/lib/serviceCatalog";
const service = serviceCatalog.find(item => item.slug === "digital-marketing-growth")!;
export const metadata = { title: "Digital Marketing & Growth | Cybertech Marketing", description: service.subtitle };
export default function Page() { return <ServiceDetail service={service} />; }
