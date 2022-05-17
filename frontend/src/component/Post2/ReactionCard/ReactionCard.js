import React from "react";

import {
  ReactionCardContainer,
  ReactionCardText,
  ReactionCardBorder,
  ReactionCardLink,
} from './'

export const ReactionCard = ({ link }) => {
  return (
    <ReactionCardContainer>
      <ReactionCardText>Give your reaction </ReactionCardText>
      <ReactionCardBorder />
      <ReactionCardLink href={link} target="_blank" rel="noopener noreferrer">
        golink <span role="img" aria-label="lightning bolt">⚡️</span>
      </ReactionCardLink>
    </ReactionCardContainer>
  );
}
