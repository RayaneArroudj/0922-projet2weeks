import styled, { css } from 'styled-components';

import { MAIN_THEME_COLOR } from '../../styles/style-constants';
import { baseTitleStyles, Paragraph } from '../../styles/base-styles';

const cardPropertiesStyled = css`
  color: #757575;
  line-height: 1.5;
`;

export const Card = styled.article`
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const CardImage = styled.img`
  border-radius: 7px 7px 0 0;
  margin-bottom: 20px;
  max-width: 100%;
  height: auto;
`;

export const CardTitle = styled.h3`
  ${baseTitleStyles}
  color: ${MAIN_THEME_COLOR};
  font-size: 20px;
`;

export const CardSecondaryTitle = styled.h4`
  color: ${MAIN_THEME_COLOR};
  font-size: 15px;
`;

export const CardParagraph = styled(Paragraph)`
  ${cardPropertiesStyled}
`;
