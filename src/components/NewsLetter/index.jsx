import React from 'react'
import { Button, Img, Input, Line, List, Text } from "components";
const index = () => {
    return (
        <>
            <div className="bg-green-50 flex flex-col items-center justify-end max-w-[1110px] mt-[100px] mx-auto p-[50px] md:px-5 rounded-[5px] w-full">
                <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mt-8 w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                        <Text
                            className="text-indigo-900 text-lg"
                            size="txtPublicSansLight18Indigo900"
                        >
                            NEWSLETTER
                        </Text>
                        <Text
                            className="mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-gray-600 w-full"
                            size="txtMerriweatherBlack36"
                        >
                            Subscribe to our website newsletter to receive news and
                            updates.
                        </Text>
                        <Text
                            className="mt-5 text-bluegray-900 text-lg"
                            size="txtPublicSansLight18"
                        >
                            Get special offers directly to your email every week!
                        </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] justify-start w-[44%] md:w-full">
                        <div className="flex flex-col gap-5 items-start justify-start rounded-[5px] w-full">
                            <Input
                                name="field"
                                placeholder="Your Email"
                                className="font-bold leading-[normal] p-0 placeholder:text-indigo-900_79 text-left text-lg w-full"
                                wrapClassName="border border-indigo-900 border-solid w-full"
                                type="email"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                            ></Input>
                            <Button
                                className="cursor-pointer font-semibold leading-[normal] min-w-[137px] text-center text-lg"
                                shape="round"
                                color="indigo_900"
                                size="xl"
                            >
                                Subscribe
                            </Button>
                        </div>
                        <Button
                            className="flex h-[77px] items-center justify-center md:ml-[0] ml-[283px] mr-[77px] rounded-[50%] w-[77px]"
                            color="pink_300"
                            size="sm"
                        >
                            <Img
                                className="h-[55px]"
                                src="images/img_ticket_77X77.svg"
                                alt="ticket One"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index