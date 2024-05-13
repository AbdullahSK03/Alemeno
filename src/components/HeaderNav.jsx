import Link from "next/link";

const HeaderNav = () => {
  return (
    <header className="px-4 shadow-md">
      <div className="relative mx-auto flex max-w-screen-lg py-4">
        <Link href="/" className="flex items-center font-black">
          <span className="font-Heading font-extrabold text-3xl">Alemeno</span>
        </Link>
        <div className="ms-auto p-2 space-x-4">
        <Link
          href="/authentication/login"
          className="ms-auto bg-black text-white px-4 py-2 border rounded-md hover:bg-white hover:text-black hover:border-black"
        >
          Login
        </Link>
        <Link
          href="/Profile"
          className="ms-auto hover:bg-black hover:text-white px-4 py-2 border rounded-md bg-white text-black border-black"
        >
          Profile
        </Link>
        </div>
  
      </div>
    </header>
  );
};

export default HeaderNav;
