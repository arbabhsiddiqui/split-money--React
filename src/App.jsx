import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  VStack,
  NumberInput,
  NumberInputField,
  Text,
  useColorMode,
  useColorModeValue,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

import { IoPeople, IoContrast } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function App() {
  const [people, setPeople] = useState(2);

  const [split, setSplit] = useState(0);
  const [total, setTotal] = useState(0);

  const incPeople = () => {
    setPeople(people + 1);
  };

  const decPeople = () => {
    setPeople(people - 1);
  };

  const handelChange = (e) => {
    console.log(e.target.value);
    setTotal(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let totals = total / people;
    totals = totals.toFixed(2);
    setSplit(totals);
  };

  const { toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("#fff", "#0A322B");

  const outerCardColor = useColorModeValue("#E4E9EF", "#07241F");

  const borderColor = useColorModeValue("#000", "#fff");

  const innerCardColor = useColorModeValue("#");

  const bottomCard = useColorModeValue("#B18439", "#26524A");

  return (
    <Flex
      justify="center"
      align="center"
      maxW={"full"}
      background={bgColor}
      minH={"100vh"}
    >
      <SimpleGrid
        className="base"
        maxW={"1100px"}
        background={outerCardColor}
        columns={2}
        spacing={10}
        height={"700px"}
        padding={"25px"}
        borderRadius={"30px"}
        border={`1px solid  #208B79`}
      >
        <span className="toggleArea">
          Toggle Theme :{" "}
          <Icon
            as={IoContrast}
            fontSize="25px"
            className="toggleBtn"
            onClick={toggleColorMode}
          ></Icon>
        </span>

        <VStack justify={"flex-start"} align={"flex-start"}>
          <Heading mt={"150px"} fontSize={"6xl"}>
            Split Your Bill Easy
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ut risus sit amet quam egestas tristique. Vivamus feugiat blandit
            purus, sed scelerisque enim consequat varius. Nullam mattis non
            massa
          </Text>
        </VStack>

        <VStack mt={"150px"} justify={"flex-start"} align={"center"}>
          <Box py={"60px"} px={"40px"} className="inner-card">
            <VStack align="flex-start" gap={5}>
              <NumberInput variant={"fill"}>
                <label htmlFor="">Total</label>
                <NumberInputField onChange={handelChange} />
              </NumberInput>
              <HStack
                gap={"10px"}
                my={"40px"}
                w={"100%"}
                align={"flex-start"}
                justify="flex-start"
              >
                <Button
                  borderRadius={"50%"}
                  variant={"outline"}
                  onClick={decPeople}
                  h={"40px"}
                  w={"40px"}
                >
                  <Icon as={FaChevronLeft} />
                </Button>
                <HStack
                  gap={"10px"}
                  border={"1px solid #ffffff4d"}
                  px="1.5rem"
                  py={"0.5rem"}
                  borderRadius={"25px"}
                >
                  <Icon color={"brand.600"} as={IoPeople} />
                  <p>{people}</p>
                </HStack>
                <Button
                  borderRadius={"50%"}
                  variant={"outline"}
                  onClick={incPeople}
                  h={"40px"}
                  w={"40px"}
                >
                  <Icon as={FaChevronRight} />
                </Button>
              </HStack>

              <Button
                background={"brand.800"}
                color={"white"}
                onClick={handelSubmit}
              >
                Calculate
              </Button>
            </VStack>
          </Box>
        </VStack>
        <Box className="pos" background={bottomCard}>
          <VStack>
            <h4 className="key">Total</h4>
            <strong className="value">{total}</strong>
          </VStack>
          <VStack>
            <h4 className="key">People</h4>
            <strong className="value">{people}</strong>
          </VStack>
          <VStack>
            <h4 className="key">per head</h4>
            <strong className="value">{split}</strong>
          </VStack>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default App;
