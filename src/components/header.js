import React from "react"
import styled from "styled-components"

const Header = props => (
  <HeaderWrapper props={props}>{props.children}</HeaderWrapper>
)

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  background-color: red;
  height: 70px;
`

export default Header
