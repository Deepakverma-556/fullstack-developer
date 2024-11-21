"use client";
import gsap from "gsap";
import { useEffect } from "react";

const AcquisitionStrategy = () => {
    const value = "Radial Code";
    const newArr = value.split(" ").map((obj) => obj.split(""));

    useEffect(() => {
        // Initial animation
        let strategy_value = gsap.timeline({});
        strategy_value.from(".text_split_child_strategy", {
            yPercent: 0,
            stagger: 0.1,
            autoAlpha: 0,
        });

        // Button hover effect
        const button = document.querySelector(".hover-button");
        button.addEventListener("mouseenter", () => {
            gsap.to(".text_split_child_strategy", { scale: 1.2, duration: 0.2, ease: "power1.inOut" });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(".text_split_child_strategy", { scale: 1, duration: 0.2, ease: "power1.inOut" });
        });

        return () => {
            // Cleanup event listeners
            button.removeEventListener("mouseenter", () => { });
            button.removeEventListener("mouseleave", () => { });
        };
    }, []);

    return (
        <>
            <div className="bg-black xl:h-screen pt-24 sm:pt-[60px] xl:pt-[80px] 2xl:pt-[40px]">
                <div className="container modified_container xl:m-auto px-4 sm:px-6 xl:px-0 h-full flex justify-center flex-col">
                    <h2 className="text-md md:text-[36px] xl:text-xl text-white font-avantt font-semibold leading-[130%] xl:whitespace-nowrap text-center lg:text-start ">
                        {newArr.map((obj, i) => (
                            <span key={i} className="text-nowrap inline-block">
                                {obj.map((obj, j) => (
                                    <span
                                        key={j}
                                        className="text_split_child_strategy inline-block"
                                    >
                                        {obj}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>
                    <button className="hover-button mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded-lg">Hover me</button>
                </div>
            </div>
        </>
    );
};

export default AcquisitionStrategy;
