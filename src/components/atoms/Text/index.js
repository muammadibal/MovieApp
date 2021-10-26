import React from 'react';
import styled from 'styled-components';
import {fonts, primaryColor} from '../../../utils';

const Text = styled.Text`
  color: ${(props) =>
    props.dark ? '#000' : props.primary ? primaryColor : '#fff'};
  font-size: ${(props) =>
    props.title
      ? 22
      : props.subtitle
      ? 16
      : props.large
      ? 32
      : props.small
      ? 11
      : 14};
  font-family: ${(props) =>
    props.light
      ? fonts.light
      : props.normal
      ? fonts.regular
      : props.semibold
      ? fonts.semibold
      : props.bold
      ? fonts.bold
      : fonts.regular};
  text-align: ${(props) =>
    props.center ? 'center' : props.justify ? 'justify' : 'left'};
`;

export default Text;
