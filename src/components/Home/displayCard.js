import React from 'react';

import {
  LoadingImage,
  Content,
  CardHeading,
  Capsules,
  Image,
  ActiveCapsules,
  PokeCard
} from '../../utils/styleComponents';

const DisplayCard = props => (
  <PokeCard key={props.name}>
    <LoadingImage>
      <Image src={props.sprites.front_default} />
    </LoadingImage>
    <Content>
      <CardHeading color='dark'>{props.name}</CardHeading>
      {props.types.map(
        typeObject =>
          typeObject.type.name === props.type ? (
            <ActiveCapsules key={typeObject.type.name}>
              {typeObject.type.name}
            </ActiveCapsules>
          ) : (
            <Capsules background='danger' key={typeObject.type.name}>
              {typeObject.type.name}
            </Capsules>
          )
      )}
    </Content>
  </PokeCard>
);

export default DisplayCard;
