const { colors, spacing } = require("tailwindcss/defaultTheme");

let myColors = {
  primary: {
    default: "#0a5f96",
    lighter: "#62b0d3"
  },
  secondary: "#59a66f",
  menu: "#085889"
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    content: [
      "./app/**/*.php",
      "./resources/**/*.html",
      "./resources/**/*.js",
      "./resources/**/*.jsx",
      "./resources/**/*.ts",
      "./resources/**/*.tsx",
      "./resources/**/*.php",
      "./resources/**/*.vue",
      "./resources/**/*.twig"
    ],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/]
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      mdPortrait: {
        raw:
          "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"
      },
      mdLandscape: {
        raw:
          "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
      }
    },
    extend: {
      colors: {
        ...myColors,
        orange: {
          "100": "#FFFAF0",
          "200": "#FEEBC8",
          "300": "#FBD38D",
          "400": "#F6AD55",
          "500": "#ED8936",
          "600": "#DD6B20",
          "700": "#C05621",
          "800": "#9C4221",
          "900": "#7B341E"
        }
      },
      spacing: {
        "74": "18.5rem"
      },
      fill: {
        ...colors,
        ...myColors
      },
      fontSize: {
        "10": "0.625rem"
      },
      height: {
        ...spacing,
        "18": "4.5rem",
        auto: "auto",
        full: "100%",
        screen: "100vh",
        vhscreen: "calc(var(--vh, 1vh) * 100)"
      },
      width: {
        ...spacing,
        "18": "4.5rem",
        "1/7": "14.2857%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%"
      },
      lineHeight: {
        "0": "0",
        "12": "3rem"
      },
      maxWidth: {
        ...spacing,
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "3rem",
        calculator: "350px"
      },
      maxHeight: {
        ...spacing,
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "16": "4rem",
        "10": "3rem"
      },
      minWidth: {
        "3": "0.75rem",
        "4": "1rem",
        "8": "2rem",
        "16": "4rem",
        "32": "8rem",
        "36": "9rem",
        "40": "10rem",
        sm: "24rem",
        ...spacing
      },
      minHeight: {
        "4": "1rem",
        "8": "2rem",
        "10": "2.5rem",
        "20": "5rem",
        "40": "10rem",
        "80": "20rem",
        sm: "24rem",
        map: "28rem",
        ...spacing
      },
      boxShadow: {
        solid: "0 0 0 2px currentColor",
        outline: `0 0 0 3px rgba(156, 163, 175, .5)`,
        "outline-gray": `0 0 0 3px rgba(254, 202, 202, .5)`,
        "outline-blue": `0 0 0 3px rgba(191, 219, 254, .5)`,
        "outline-green": `0 0 0 3px rgba(167, 243, 208, .5)`,
        "outline-yellow": `0 0 0 3px rgba(253, 230, 138, .5)`,
        "outline-red": `0 0 0 3px rgba(254, 202, 202, .5)`,
        "outline-pink": `0 0 0 3px rgba(251, 207, 232, .5)`,
        "outline-purple": `0 0 0 3px rgba(221, 214, 254,, .5)`,
        "outline-indigo": `0 0 0 3px rgba(199, 210, 254, .5)`
      },
      scale: {
        "m-100": "-1"
      }
    }
  },
  variants: {
    tableLayout: ["responsive", "hover", "focus"],
    cursor: ["hover", "disabled"],
    opacity: ["hover", "disabled", "focus", "responsive", "group-hover"],
    visibility: ["hover", "responsive", "group-hover"],
    fill: ["responsive", "hover", "focus"]
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ]
};
