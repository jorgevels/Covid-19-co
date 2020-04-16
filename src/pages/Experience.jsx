/* eslint-disable no-unused-vars */
import React from "react";
import H2Styled from "../Styled/H2Styled";
import H3Styled from "../Styled/H3Styled";
import SpanStyled from "../Styled/SpanStyled";

const Experience = props => (
  <div className="Experience">
    <H2Styled name="Experiencia" />
    <div className="Experience-container">
      <div className="Experience-item">
        {props.data.map((exp, index) => (
          <div className="Experience-item" key={`exp-${index}`}>
            <H3Styled>{exp.jobTitle}</H3Styled>
            <SpanStyled>{exp.company}</SpanStyled>
            <br />
            <SpanStyled>{exp.jobDescription}</SpanStyled>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
