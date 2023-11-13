import { Link } from "react-router-dom";

const Drawer = ({
  toRightDrawer,
  setToRightDrawer,
  drawerTranslate,
  setDrawerTranslate,
}: {
  toRightDrawer: any;
  setToRightDrawer: any;
  drawerTranslate: any;
  setDrawerTranslate: any;
}) => {
  function myFunc() {
    setToRightDrawer(!toRightDrawer);
  }

  const navList = [
    {
      title: "Main Page",
      url: "/",
    },
    {
      title: "Products",
      url: "/allproduct",
    },
    {
      title: "Categoris",
      url: "/allCategories",
    },
    {
      title: "Login",
      url: "/login",
    },
    {
      title: "Admin mail",
      url: "/admin/allproduct",
    },
    {
      title: "User mail",
      url: "/user/allorder",
      color: "orange-500",
    },
  ];

  return (
    <div className="fixed z-10 ">
      {toRightDrawer ? (
        <div
          className={`fixed top-0 z-10 bottom-0 right-0 left-0 bg-[#00000080]`}
        >
          <div
            id="drawer-right-example"
            className={` animate-drawer fixed top-[45px] ${
              drawerTranslate ? "right-[-100%]" : "right-0"
            } transition-all duration-300 h-screen p-4 overflow-y-auto  bg-white w-72  dark:bg-gray-800`}
            //tabIndex="-1"
            aria-labelledby="drawer-right-label"
          >
            <h5
              id="drawer-right-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                onClick={() => {}}
                className="w-4 h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              Right drawer
            </h5>
            <button
              onClick={() => {
                setTimeout(myFunc, 400);
                setDrawerTranslate(!drawerTranslate);
              }}
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              <ul>
                <li>
                  <Link to="/card">
                    <svg
                      onClick={() => {
                        setTimeout(myFunc, 400);
                        setDrawerTranslate(!drawerTranslate);
                      }}
                      className="w-6 h-6 text-gray-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 21"
                    >
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                  </Link>
                </li>

                {navList.map((item) => {
                  return (
                    <li
                      key={item.title}
                      onClick={() => {
                        setTimeout(myFunc, 400);
                        setDrawerTranslate(!drawerTranslate);
                      }}
                      className="mt-6 hover:text-gray-800"
                    >
                      {" "}
                      <Link className={`text-lg block w-full`} to={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get access{" "}
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Drawer;
