
const HeaderNav = () => {
  return (
    <header class="mb-2 px-4 shadow">
      <div class="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <a class="flex items-center font-black" href="/">
          <span class="font-Heading font-extrabold text-3xl">Alemeno</span>
        </a>
        <input class="peer hidden" type="checkbox" id="navbar-open" />
        <label
          class="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          for="navbar-open"
        >
        </label>
        <button className="ms-auto bg-black text-white px-4 py-2 border rounded-md hover:bg-white hover:text-black hover:border-black">Sign-Up</button>
        <nav
          aria-label="Header Navigation"
          class="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
        >
          <ul class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            <li class="">
              <a class="text-black hover:bg-gray-200" href="Profile">
                <span>
                    <h2>Profile</h2>        
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
