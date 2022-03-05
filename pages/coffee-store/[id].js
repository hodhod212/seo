import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStores = () => {
  const router = useRouter();
  return (
    <div>
      <h1>CoffeeStore {router.query.id}</h1>
      <Link href="/">Back to home</Link>
      <Link href="/coffee-store/dynamic">Go to coffe Store</Link>
    </div>
  );
};

export default CoffeeStores;
