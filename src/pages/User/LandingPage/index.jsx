import React, { useEffect } from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { NavHashLink } from 'react-router-hash-link';
import Newsletter from 'components/NewsLetter/index'
import Podcast from "components/Podcast";
import Blogs from "components/Blog";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1030px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-8 justify-start">
                <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
                  <Img
                    className="h-[61px] md:mt-0 mt-[66px] w-[61px]"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-600 w-full"
                      size="txtMerriweatherBlack50"
                    >
                      Share via writing, hope you enjoy
                    </Text>
                    <Text
                      className="leading-[35.00px] text-2xl md:text-[22px] text-center text-gray-601 sm:text-xl w-[78%] sm:w-full"
                      size="txtPublicSansRegular24"
                    >
                      Increase your knowledge by reading new things and I will
                      share whatever I know for you, as long as I enjoy it
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-end md:ml-[0] ml-[259px] rounded-[35.5px] w-[56%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[221px] rounded-[35.5px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_900"
                    size="3xl"
                  >
                    Read More
                  </Button>
                  <NavHashLink
                    to=""
                  ><Button
                    className="cursor-pointer leading-[normal] min-w-[271px] rounded-[35.5px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_201"
                    size="3xl"
                    variant="outline"
                  >
                      Listen to Podcasts
                    </Button></NavHashLink>

                </div>
              </div>
              <Img
                className="h-[61px] md:mt-0 mt-[205px] w-[61px]"
                src="images/img_ticket.svg"
                alt="ticket"
              />
            </div>
          </div>
          <Podcast />
          <Blogs />
          <Newsletter />
          <Footer className="bg-gray-600 flex items-center justify-center mt-[129px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
