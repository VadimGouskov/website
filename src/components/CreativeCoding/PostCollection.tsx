import {Box, Link, SimpleGrid} from "@chakra-ui/react";
import * as React from "react";
import {BsArrowRight, BsClockFill} from "react-icons/bs";
import PostCard from "./PostCard";

const PostCollection: React.FC = () => {
    return (
        <Box as="section" py={{base: "10", sm: "24"}}>
            <Box maxW={{base: "xl", md: "7xl"}} mx="auto" px={{base: "6", md: "8"}}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing="12" mb="10">
                    <PostCard
                        category="Fashion"
                        media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="7 Steps to Get Professional Facial Results At Home"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        href="#"
                    />
                    <PostCard
                        category="Valentine"
                        media="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="The Best Excuses To Spend A Cozy Valentine’s Day In"
                        description="As much as I love an over-the-top, romantic Valentine’s date, part of me is looking"
                        href="#"
                    />
                    <PostCard
                        category="My Style"
                        media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
                        description="HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready for"
                        href="#"
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default PostCollection;
