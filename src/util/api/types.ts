
export interface VideoInfo {
  id: string,
  createdAt: string,
  muxPlaybackId: string | '',
  muxAssetStatus: 'preparing' | 'ready' | 'error',
  url: string,
  sequenceId: number,
  muxAsset: {
    status: 'preparing' | 'ready' | 'errored',
    playback_ids?: [
      {
        id: string
      }
    ]
  }
}