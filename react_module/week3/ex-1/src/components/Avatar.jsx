import { BigHead } from '@bigheads/core';

function Small() {
  return (
    <BigHead
      skinTone='yellow'
      eyes='simple'
      eyebrows='concerned'
      mouth='tongue'
      hair='pixie'
      facialHair='mediumBeard'
      clothing='tankTop'
      accessory='tinyGlasses'
      graphic='none'
      hat='none2'
      body='chest'
      hairColor='blue'
      clothingColor='white'
      circleColor='blue'
      lipColor='pink'
      hatColor='black'
      faceMaskColor='white'
      mask='true'
      faceMask='false'
      lashes='false'
    />
  );
}

function Medium() {
  return (
    <BigHead
      accessory='shades'
      body='breasts'
      circleColor='blue'
      clothing='dressShirt'
      clothingColor='blue'
      eyebrows='raised'
      eyes='wink'
      faceMask={false}
      faceMaskColor='white'
      facialHair='mediumBeard'
      graphic='redwood'
      hair='none'
      hairColor='white'
      hat='turban'
      hatColor='blue'
      lashes
      lipColor='red'
      mask
      mouth='grin'
      skinTone='light'
    />
  );
}

function Big() {
  return (
    <BigHead
      accessory='shades'
      body='chest'
      circleColor='blue'
      clothing='vneck'
      clothingColor='red'
      eyebrows='concerned'
      eyes='simple'
      faceMask={false}
      faceMaskColor='green'
      facialHair='stubble'
      graphic='react'
      hair='buzz'
      hairColor='brown'
      hat='none'
      hatColor='green'
      lashes
      lipColor='pink'
      mask
      mouth='lips'
      skinTone='red'
    />
  );
}

export { Small, Medium, Big };
