import React, { useEffect, useState } from "react";
import { getPercentage, lerp } from "../../Utilities/Math";
import { H1 } from "./TitleHeader.styles";

const minTextSettings = {
  screenWidth: 700,
  fontSize: 36,
  letterSpacing: -2,
  translateY: -81,
  paddingLeft: 4
}

const maxTextSettings = {
  screenWidth: 1600,
  fontSize: 110,
  letterSpacing: -7.5,
  translateY: -238,
  paddingLeft: 16
}

const TitleHeader = ({ text }) => {
  const [textSettings, setTextSettings] = useState({
    fontSize: maxTextSettings.fontSize,
    letterSpacing: maxTextSettings.letterSpacing,
    translateY: maxTextSettings.translateY,
    paddingLeft: maxTextSettings.paddingLeft,
  })

  const handleResize = () => {
    const widthScalar = getPercentage(
      minTextSettings.screenWidth,
      maxTextSettings.screenWidth,
      window.innerWidth
    )

    setTextSettings({
      fontSize: lerp(minTextSettings.fontSize, maxTextSettings.fontSize, widthScalar),
      letterSpacing: lerp(minTextSettings.letterSpacing, maxTextSettings.letterSpacing, widthScalar),
      translateY: lerp(minTextSettings.translateY, maxTextSettings.translateY, widthScalar),
      paddingLeft: lerp(minTextSettings.paddingLeft, maxTextSettings.paddingLeft, widthScalar),
    })
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <H1
      fontSize={textSettings.fontSize + 'pt'}
      letterSpacing={textSettings.letterSpacing + 'px'}
      translateY={textSettings.translateY + 'px'}
      paddingLeft={textSettings.paddingLeft + 'px'}
    >
      {text}
    </H1>
  );
};

export default TitleHeader;