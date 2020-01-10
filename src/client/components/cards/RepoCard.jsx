import React from "react"
import Styled from "styled-components"

const Wrapper = Styled.div`
  display: flex;
  width: 700px;
  margin-bottom: 10px;
`
const Avatar = Styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`
const Description = Styled.div`
  width: 400px;
  padding-left: 15px;
`
const Label = Styled.div`
  margin-bottom: 7px;
`
export default props => (
  <Wrapper>
    <Avatar src={props.owner.avatar_url} />
    <Description>
      <Label>Repo Name: {props.name}</Label>
      <Label>Description: {props.description}</Label>
      <Label>
        <a href={props.url} target="_blank">
          {props.url}
        </a>
      </Label>
    </Description>
  </Wrapper>
)
