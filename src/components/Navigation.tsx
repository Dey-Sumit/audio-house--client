import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full">
      <Link href="/">
        <a>AudioHouse</a>
      </Link>
    </nav>
  );
};

export default Navigation;
