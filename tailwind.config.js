/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Inter_Light: ["Inter_Light"],
        Inter_Medium: ["Inter_Medium"],
        Inter_Black: ["Inter_Black"],
        Inter_Bold: ["Inter_Bold"],
        Inter_ExtraBold: ["Inter_ExtraBold"],
        Graphik: ["Graphik"],
        Graphik_Medium: ["Graphik_Medium"],
      },
      screens: {
        "bsm": "480px",
        "tblg": "800px"
      },
      colors: {
        text_1: "#35000BC9",
        dispa8chRed: {
          50: "#FCE8EC",
          100: "#F9CDD6",
          200: "#F39BAC",
          300: "#EE6D87",
          400: "#E83B5E",
          500: "#D1193E",
          600: "#A91432",
          700: "#800F26",
          800: "#520A18",
          900: "#29050C",
          950: "#170307",
          10 : "#E41F47",
        },

        dispa8chLightGray :{
          100 : "#A4707B",
        },

        dispa8chGreen: {
          50: "#1DD119",
          100: "#189B62",
          200: "#118653",
          300: "#23E41F",
          400: "#06A86E",
          500: "#50B792",
          600: "#23E41F",
        },
        dispa8chBlue: {
          50: "#0093FD",
          100: "#189FFF",
          200: "#0093FD",
          300: "#189FFF",
          400: "#70C8F2",
          500: "#189FFF",
          600: "#18A0FB",
          700: "#007FDC",
        },
        dispa8chYellow: {
          50: "#FDA800",
          100: "#FFB218",
          200: "#FDA800",
          300: "#FFB218",
          400: "#FFD746",
          500: "#FF984C",
          600: "#FFBA31",
          700: "#FDA800",
        },
        dispa8chGray: {
          100: "#757575",
          200: "#000000",
          300: "#B3B3B3",
          400: "#E2E2E2",
          500: "#D1D1D1",
          600: "#F6F6F6",
        },
        dispa8chBlack: {
          50: "#000000",
          100: "#0D0D0D",
          200: "#272727",
          300: "#1B1B1B",
          400: "#333333",
          500: "#262626",
          600: "#000000",
          700: "#292F33",
        },
      },
      width:{
        91 : "90%",
        110: "500px",
        200 : "950px",
        105 : "443px",
        68 : "258px",
        22 : "87px",
        26 : "105px",
        101 : "422px",
        125: "462px",
        13 : "51px"
      },
      height:{
        35 : "141px",
        15 : "59px",
        130: "934px",
        22 : "88px"

      },
      maxWidth :{
        120: "500px",
        110: "450px",
        100: "400px"
      },
    padding : {
      5.5: "4%"
    },
    margin : {
      5.5: "4%",
      22 : "86px",
      4.5: "18px",
      1.7: "7px",
    },
      maxHeight : {
      56: "224px",
      22: "88px"
      },
      gradientColorStops: {
        blue_pink: "from-[#2300FD] to-[#EE0CD7]",
        darkblue_blue: "from-[#0093FD] to-[#1900FD]",
        dispa8ch_gradient: "from-[#E92E29] to-[#FFB800]",
      },
      plugins: [require("@headlessui/tailwindcss")],
    },
  },
};
