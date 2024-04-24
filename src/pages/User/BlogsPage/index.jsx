import React, { useEffect } from 'react'
import { Button, Img, Input, Line, List, Text } from "components";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBlog,STATUSES } from 'store/User/showUserBlog';
import { NavLink } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

const index = () => {
  const blogs = useSelector((state) => state.userBlog.data);
  const status = useSelector(state => state.userBlog.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserBlog());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <h2>Loading</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <>
    <Header/>
    <div className="flex md:flex-col flex-row gap-[29px] items-center justify-center max-w-[1210px] mt-[100px] mx-auto md:px-5 w-full">

      <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[80%] md:w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-start w-[39%] sm:w-full">
            <Button
              className="flex h-[76px] items-center justify-center w-[76px]"
              shape="circle"
              color="gray_300"
              size="md"
            >
              <Img
                className="h-[61px] md:mt-0 mt-[5px] w-[61px]"
                src="images/img_ticket.svg"
                alt="ticket"
              />
            </Button>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="ml-0.5 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-600"
                size="txtMerriweatherBlack36"
              >
                All Blogs
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-[50px] items-center w-full"
          orientation="vertical"
        >
          {
            blogs.map(blog => (
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="italic ml-0.5 md:ml-[0] mt-[30px] text-5xl sm:text-[38px] md:text-[44px] text-gray-600 tracking-[0.12px] w-full"
                    size="txtMerriweatherBoldItalic48"
                  >
                    {blog.title}
                  </Text>
                  <Img
                    className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                    src={blog.image}
                    alt="RectangleEleven One"
                  />
                  <Text
                    className="leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray-900 text-lg w-full"
                    size="txtPublicSansLight18"
                  >
                    {blog.descriptionShort}
                  </Text>
                  <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                      <Button
                        className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                        color="light_blue_50"
                        size="md"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_clock.svg"
                          alt="clock One"
                        />
                      </Button>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPublicSansLight14Black900"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                      <Button
                        className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                        color="lime_50"
                        size="md"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark One"
                        />
                      </Button>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPublicSansLight14Black900"
                      >
                        12 Like
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                      <Button
                        className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                        color="red_50"
                        size="md"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_location.svg"
                          alt="location One"
                        />
                      </Button>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPublicSansLight14Black900"
                      >
                        Share
                      </Text>
                    </div>
                  </div>
                  <NavLink to={'/blogdetails'}>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 pl-7 py-[25px]"
                    rightIcon={
                      <Img
                        className="h-[25px] mt-6 mb-[23px] ml-[19px] mr-[29px]"
                        src="images/img_arrowright.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="round"
                    color="indigo_900_67"
                  >
                    <div className="font-bold font-publicsans leading-[normal] sm:pl-5 text-left text-lg tracking-[0.12px]">
                      Continue Reading
                    </div>
                  </Button>
                  </NavLink>
                </div>
              </div>
            ))
          }
        </List>
        <div className="flex flex-row items-center justify-end md:ml-[0] ml-[450px] w-[29%] md:w-full">
          <Text
            className="bg-indigo-900 flex h-10 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-10"
            size="txtPublicSansRegular18"
          >
            1
          </Text>
          <Text
            className="bg-white-A700 flex h-10 items-center justify-center ml-5 rounded-[50%] text-center text-indigo-900 text-lg w-10"
            size="txtPublicSansRegular18Indigo900"
          >
            2
          </Text>
          <div className="flex flex-row gap-[15px] items-start justify-between ml-10 w-[34%]">
            <Text
              className="text-indigo-900 text-lg"
              size="txtPublicSansLight18Indigo900"
            >
              Next
            </Text>
            <Img
              className="h-4 mt-[3px] w-4"
              src="images/img_arrowright.svg"
              alt="arrowright Three"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer className="bg-gray-600 flex items-center justify-center mt-[129px] md:px-5 w-full" />
    </>
    
  )
}

export default index