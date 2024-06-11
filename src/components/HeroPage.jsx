import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { About } from "../pages/about";
import ImageModal from "./ImageModal";
import { introdata } from "../content_op";


const features = [
  {
    name: "Home",
    href: "/home",
    description:
      "Get a better understanding of where your traffic is coming from.",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    description: "Speak directly to your customers in a more meaningful way.",
  },
  {
    name: "About",
    href: "/about",
    description: "Your customers' data will be safe and secure.",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Connect with third-party tools that you're already using.",
  }
];



export default function Example() {
  const [isShowed, SetShowed] = useState(false);
  const handleShowImg = () => {
    SetShowed(!isShowed);
  }
  

  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 px-6">
              <div className="d-flex py-6" style={{justifyContent:'space-between', alignItems: 'center'}}>
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ width: '25%', cursor:'pointer' }}
                >
                  <div className="flex justify-start" style={{cursor:'pointer'}}>
                    <img
                      className="h-8 w-auto header_img"
                      src="/me.jpeg"
                      alt="Me"
                      onClick={handleShowImg}
                    />
                  </div>

                  <div className="flex" onClick={handleShowImg}>Francesco</div>
                </div>
                <div className="-mr-2 -my-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-100">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true"  style={{color: 'rgb(0,152, 158, 1)', cursor:'pointer'}}/>
                  </Popover.Button>
                </div>
                
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ width: "25%" , cursor:'pointer'}}
                      >
                        <div className="flex justify-start">
                          <img
                            className="h-8 w-auto header_img"
                            src="/me.jpeg"
                            alt="Me"
                            onClick={handleShowImg}
                          />
                        </div>

                        <div className="d-flex" onClick={handleShowImg} >Francesco</div>
                      </div>

                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-100">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true"  style={{color: 'rgb(0,152, 158, 1)', cursor:'pointer'}}/>
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <a style={{cursor:'pointer'}}
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            
                            <span className="ml-3 text-base font-medium" style={{cursor:'pointer'}}>
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <ImageModal show={isShowed} onHide={()=> SetShowed(!isShowed)} imageUrl={introdata.my_img} ml={true} />

      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
        <About />
        </div>
      </main>
    </div>
  );
}
