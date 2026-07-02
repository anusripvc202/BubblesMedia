import { categories } from '../../../data/servicesData';

export async function generateStaticParams() {
  return categories.map((cat) => ({
    id: cat.id,
  }));
}

export default function Layout({ children }) {
  return children;
}
