import { Flex, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "./helper/Colors";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  componentDidUpdate() {}

  render() {
    let { error, errorInfo } = this.state;
    if (process.env.REACT_APP_PRODUCTION_FLAG === "true") {
      return (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
          textAlign={"center"}
        >
          <Text fontSize={{ base: "lg", md: "xl" }}>
            Something went wrong. Please refresh page!
          </Text>
        </Flex>
      );
    } else if (errorInfo) {
      return (
        <Flex
          flexDirection={"column"}
          height={"100vh"}
          width={"100vw"}
          padding={6}
        >
          <Heading as="h3" size="lg" fontWeight={"medium"} marginBottom={4}>
            {error?.message || "Ohh no error occurred!"}
          </Heading>
          <Text fontSize="md" color={COLORS.red}>
            {error?.stack ||
              "No stack trace available, open console for more details."}
          </Text>
        </Flex>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
