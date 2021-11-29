import React from "react";
import Image from "next/image";
import testimonial1 from "../public/testimonial1.png";
import testimonial2 from "../public/testimonial2.png";
import { SimpleGrid, Box } from "@chakra-ui/react";

const TweetGrid = () => {
  return (
    <Box d="flex" justifyContent="center">
      <SimpleGrid columns={1} spacing={1} w="100%">
        <Box>
          <blockquote
            class="twitter-tweet"
            data-conversation="none"
            data-theme="dark"
          >
            <p lang="en" dir="ltr">
              Everything should have cmd+k 😂 apps, websites, the cable-drawer
            </p>
            &mdash; Simon Theis (@simontheis){" "}
            <a href="https://twitter.com/simontheis/status/1458167867229229059?ref_src=twsrc%5Etfw">
              November 9, 2021
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </Box>
        <Box>
          <blockquote class="twitter-tweet" data-theme="dark">
            <p lang="en" dir="ltr">
              <a href="https://twitter.com/close?ref_src=twsrc%5Etfw">@close</a>{" "}
              I&#39;d love it if you could support Cmd+K quick bar switching,
              like{" "}
              <a href="https://twitter.com/Superhuman?ref_src=twsrc%5Etfw">
                @Superhuman
              </a>{" "}
              and{" "}
              <a href="https://twitter.com/linear?ref_src=twsrc%5Etfw">
                @linear
              </a>
              . It&#39;d speed up me navigating Close. Something like{" "}
              <a href="https://t.co/4ML73YGYNF">https://t.co/4ML73YGYNF</a>{" "}
              might help?
            </p>
            &mdash; Stephen Whitworth (@sjwhitworth){" "}
            <a href="https://twitter.com/sjwhitworth/status/1464201705449529355?ref_src=twsrc%5Etfw">
              November 26, 2021
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TweetGrid;
