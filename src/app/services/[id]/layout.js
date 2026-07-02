import { serviceDatabase } from '../../../data/servicesData';

export async function generateStaticParams() {
  return Object.keys(serviceDatabase).map((id) => ({
    id: id,
  }));
}

export default function Layout({ children }) {
  return children;
}
