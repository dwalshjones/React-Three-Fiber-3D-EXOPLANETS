import React from 'react'
import Sound from 'react-sound'
import Pullulation from '../../server/public/Pullulation.mp3'

export default function Music() {
  return <Sound url={Pullulation} playStatus={Sound.status.PLAYING} />
}
