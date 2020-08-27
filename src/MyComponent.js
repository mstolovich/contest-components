import React from "react";
import atomize from "@quarkly/atomize";
import { useQRCode } from 'react-hook-qrcode';

const optionsCategory = "options"
const Container = atomize.div()

const QRCodeComponent = props => {
  const text = props.text
  const options = {
    level: props.level,
    margin: props.margin,
    scale: props.scale,
    width: props.width,
    color: {
        dark: props.colorDark,
        light: props.colorLight
    }
  }
  const [inputRef] = useQRCode({
    text: text, 
    options: options
  })
  return(
    <Container {...props}><canvas ref={inputRef}/></Container>
  )
  }

export default atomize(QRCodeComponent)(
  {
    description: {
      en: "QRCode Generator"
    },
    propInfo: {
      text: {
        description: {
          en: "Text to convert"
        },
        category: "Main",
        control: "input",
        type: "string",
        weight: 0.5
      },
      level: {
        description: {
          en: "Correction level"
        },
        category: optionsCategory,
        control: "select",
        variants: ['low', 'medium', 'quartile', 'high'],
        weight: 0.5
      },
      margin: {
        description: {
          en: "Define how much wide the quiet zone should be" 
        },
        category: optionsCategory,
        control: "input",
        type: "number",
        weight: 0.5
      },
      scale: {
        description: {
          en: "Scale factor" 
        },
        category: optionsCategory,
        control: "input",
        type: "number",
        weight: 0.5
      },
      width: {
        description: {
          en: "Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over 'scale'." 
        },
        category: optionsCategory,
        control: "input",
        type: "number",
        weight: 0.5
      },
      colorDark: {
        description: {
          en: "Dark module's color. Note: dark color should always be darker than Light color" 
        },
        category: optionsCategory,
        control: "color",
        weight: 0.5
      },
      colorLight: {
        description: {
          en: "Light module's color" 
        },
        category: optionsCategory,
        control: "color",
        weight: 0.5
      },
     
    }
  }, // configuration
  {
    text: "https://quarkly.io/",
    level: "M",
    margin: 2,
    scale: 3,
    width: 100,
    colorDark: "#000000ff",
    colorLight: "#ffffffff",
  }
);
