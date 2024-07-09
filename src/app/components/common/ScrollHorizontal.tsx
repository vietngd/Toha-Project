import ArrowRightBlueIcon from "@/app/components/images/page-navigation.svg";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  elementId: string;
  widthItem: number;
  children?: React.ReactNode;
  total?: number;
  wrapperClass?: string;
}

const ScrollHorizontal = ({ children, elementId, widthItem, total, wrapperClass }: Props) => {
  const [isLeftActive, setLeftActive] = useState<boolean>(false);
  const [isRightActive, setRightActive] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const checkScroll = () => {
    const el = document?.getElementById(elementId);
    if (el) {
      if (el.scrollLeft <= 0) {
        if (isLeftActive) setLeftActive(false);
        if (!isRightActive) setRightActive(true);
      } else if (el.scrollLeft + el.offsetWidth + 1 >= el.scrollWidth) {
        if (!isLeftActive) setLeftActive(true);
        if (isRightActive) setRightActive(false);
      } else {
        if (!isLeftActive) setLeftActive(true);
        if (!isRightActive) setRightActive(true);
      }
    }
  };

  const handleScrollLeft = () => {
    if (isDisabled) return;
    const el = document.getElementById(elementId);
    if (el) {
      setDisabled(true);
      const value = widthItem + 16;
      const scrollDuration = 50; // Duration of the scroll animation in milliseconds
      const scrollStep = 5; // Scroll step in pixels

      const scrollLeftInterval = setInterval(() => {
        if (el.scrollLeft <= 0) {
          clearInterval(scrollLeftInterval);
          setDisabled(false);
          checkScroll();
        } else {
          el.scrollLeft -= scrollStep;
        }
      }, scrollDuration / (value / scrollStep));
    }
  };

  const handleScrollRight = () => {
    if (isDisabled) return;
    const el = document.getElementById(elementId);
    if (el) {
      setDisabled(true);
      const value = widthItem + 16;
      const scrollDuration = 50;
      const scrollStep = 5;

      const scrollRightInterval = setInterval(() => {
        if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
          clearInterval(scrollRightInterval);
          setDisabled(false);
          checkScroll();
        } else {
          el.scrollLeft += scrollStep;
        }
      }, scrollDuration / (value / scrollStep));
    }
  };

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (el && !(el.scrollLeft + el.offsetWidth === el.scrollWidth)) {
      setRightActive(true);
    }
  }, []);

  return (
    <div className='w-full relative overflow-hidden'>
      {isLeftActive && (
        <div
          className={clsx(
            "w-[48px] h-full z-[1] absolute left-[-4px] flex items-center justify-center"
          )}
          style={{
            background: "linear-gradient(270deg, rgba(244, 244, 244, 0) 0%, #F4F4F4 100%)",
          }}
        >
          <button className={clsx("absolute left-4")} onClick={handleScrollLeft}>
            <Image src={ArrowRightBlueIcon} width={32} height={32} alt='' className='rotate-180' />
          </button>
        </div>
      )}

      {isRightActive && (
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(244, 244, 244, 0) 0%, #F4F4F4 100%)  duration-700",
          }}
          className={clsx(
            "w-[48px] h-full z-[1] absolute right-0 flex items-center justify-center"
          )}
        >
          <button className={clsx("absolute right-4")} onClick={handleScrollRight}>
            <Image src={ArrowRightBlueIcon} width={32} height={32} alt='' />
          </button>
        </div>
      )}

      <div
        id={elementId}
        className={clsx(
          "w-[calc(100%_+_4px)] ml-[-4px] pl-[4px] ",
          "flex gap-2 overflow-hidden hidden-scroll-bar",
          wrapperClass
        )}
        onScroll={() => checkScroll()}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollHorizontal;
