import React from 'react'
import Sound from 'react-sound'
import Pullulation from '../../server/public/Pullulation.mp3'

export default function Music() {
  return <Sound url={SpaceMusic} playStatus={Sound.status.PLAYING} />
}
