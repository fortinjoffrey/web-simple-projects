import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {/* Remove playlists */}
      {videos
        .filter((el) => el.id.videoId || el.id.channelId)
        .map((item, index) => {
          return (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        })}
    </Stack>
  );
};

export default Videos;
