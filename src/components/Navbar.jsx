"use client";
import { onChangeRtl } from "@/redux/slices/customize";
import translate from "@/utils/functions/translate";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center space-x-14 p-4">
      <div className="mx-2">
        <Image
          alt="Dnapp Logo"
          width="0"
          priority
          height="0"
          sizes="100%"
          className="w-[126px] h-auto"
          src="/images/logo.png"
        />
      </div>
      <div className="flex justify-center items-center space-x-36">
        <button>{translate("Home")}</button>
        <button>{translate("contact us")}</button>
        <button>{translate("Products")}</button>
      </div>
      <div className="mx-2">
        <select onChange={() => dispatch(onChangeRtl())}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
}
