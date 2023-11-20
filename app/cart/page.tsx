"use client";
import B from "@/public/B.jpeg";
import E from "@/public/E.png";
import L from "@/public/L.jpeg";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: String;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };

    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]",
    ) as CartItem[];
    setCartItems(storedCartItems);

    calculateTotalPrice();
  }, []);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20 rounded-xl mt-30">
        <h1 className="mb-10 text-center text-2xl font-bold font-title">
          Your Cart
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <p>Item List</p>
            <hr className="border border-gray-400 mb-6 mt-1" />
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <Image
                  src={((): StaticImageData => {
                    if (item.image === "B") {
                      return B;
                    } else if (item.image === "L") {
                      return L;
                    } else {
                      return E;
                    }
                  })()}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">Blue</p>
                  </div>
                  <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() =>
                          handleQuantityChange(index, item.quantity - 1)
                        }
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                      />
                      <span
                        onClick={() =>
                          handleQuantityChange(index, item.quantity + 1)
                        }
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">RM {item.price * item.quantity}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleRemoveItem(index)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 relative md:top-[53px]">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">RM {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">RM {totalPrice * 0.07}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  RM {totalPrice + totalPrice * 0.07}
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              onClick={() =>
                alert("CHECKOUT SUCCESSFUL. CHECK EMAIL FOR MORE INFORMATION.")
              }
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
