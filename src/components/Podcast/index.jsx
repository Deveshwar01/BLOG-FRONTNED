import React, { useEffect } from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPodcast, STATUSES } from "store/User/showProduct";

const index = () => {
    const Podcasts = useSelector((state) => state.showPodcast.data);
    const status = useSelector(state => state.showPodcast.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserPodcast());
    }, [dispatch]);

    if (status === STATUSES.LOADING) {
        return <h2>Loading</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong</h2>;
    }
    return (
        <>
            <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mt-[162px] mx-auto md:px-5 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[39%] sm:w-full">
                        <Button
                            className="flex h-[76px] items-center justify-center w-[76px]"
                            shape="circle"
                            color="gray_300"
                            size="md"
                        >
                            <Img
                                className="h-[50px]"
                                src="images/img_microphone.svg"
                                alt="microphone"
                            />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                            <Text
                                className="ml-0.5 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-600"
                                size="txtMerriweatherBlack36"
                            >
                                Latest Podcasts{" "}
                            </Text>
                            <Text
                                className="mt-[5px] text-2xl md:text-[22px] text-gray-601 sm:text-xl tracking-[0.12px]"
                                size="txtPublicSansRegular24"
                            >
                                Get started on latest episodes
                            </Text>
                        </div>
                    </div>
                    <Text
                        className="text-indigo-901 text-sm tracking-[0.12px]"
                        size="txtPublicSansBold14"
                    >
                        See all podcasts
                    </Text>
                </div>
                <List
                    className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                    orientation="horizontal"
                >
                    {
                        Podcasts.map(Podcast => (
                            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                                    <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                                        style={{ backgroundImage: `url(${Podcast.image})` }}
                                    >
                                        <Button
                                            className="flex h-[72px] items-center justify-center mb-[9px] rounded-[50%] w-[72px]"
                                            shape="circle"
                                            color="gray_600_76"
                                            size="xl"
                                        >
                                            <Img
                                                className="h-[35px]"
                                                src="images/img_group.svg"
                                                alt="Group"
                                            />
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                                        <Text
                                            className="text-base text-gray-600 w-full"
                                            size="txtMerriweatherBold16"
                                        >
                                            {Podcast.title}
                                        </Text>
                                        <Text
                                            className="text-bluegray-600 text-sm"
                                            size="txtPublicSansLight14"
                                        >
                                            {Podcast.author}
                                        </Text>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </List>
            </div>
        </>
    )
}

export default index