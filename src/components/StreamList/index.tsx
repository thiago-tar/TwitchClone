import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';


import {
  List,
  StreamContainer,
  StreamColumn,
  StreamRow,
  StreamThumbnail,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,

} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}> Thiago </StreamUserName>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chackra UI e GraphQl
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science & Technolog
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Porgues</TagText>
          </TagView>
          <TagView>
            <TagText>web development</TagText>
          </TagView>
        </TagRow>

      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
