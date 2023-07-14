import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import bitImg from "../Assets/bitcoin.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image src={bitImg} w={"full"} h={"full"} objectFit={"contain"} />
      </motion.div>
      <Text
        fontSize={"4xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        p={"5"}
        color={"whiteAlpha.700"}
        mt={"-14"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
