import React, {Component} from 'react';
import Headline from 'grommet/components/Headline';
import {Box} from "grommet";
import SocialButtonGroup from "../header/SocialButtonGroup";

class Header extends Component {
  render() {
    return (
      <Box direction={"column"}>
        <Headline>Hello. My name is Max Kramer.<br/></Headline>
        <Headline id={"subtitle"} size={"small"}>I’m a senior software engineer, living in
          Berlin.</Headline>
        <SocialButtonGroup/>
      </Box>
    );
  }
}

export default Header;