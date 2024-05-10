import Link from "next/link";

const HeaderNav = () => {
  return (
    <header className="mb-2 px-4 shadow">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center font-black">
          <span className="font-Heading font-extrabold text-3xl">Alemeno</span>
        </Link>
        <div className="flex">
        <Link
          href="/authentication/login"
          className="ms-auto bg-black text-white px-4 py-2 border rounded-md hover:bg-white hover:text-black hover:border-black"
        >
          Login
        </Link>
        <Link className="text-black p-2 hover:bg-gray-200" href="/Profile">
            <span>
              <h2>Profile</h2>
            </span>
        </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
