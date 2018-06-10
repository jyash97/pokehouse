import React from 'react';

import {
  PokeCard,
  LoadingBar,
  LoadingImage,
  Content,
  CardHeading
} from '../../utils/styleComponents';

const LoadingCard = props => (
  <PokeCard>
    <LoadingImage />
    <Content>
      <CardHeading color='dark'>{props.name}</CardHeading>
      <LoadingBar />
      <LoadingBar small />
    </Content>
  </PokeCard>
);

export default LoadingCard;
