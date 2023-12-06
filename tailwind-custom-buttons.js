module.exports = function ({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      padding: ".5rem 1rem",
      borderRadius: theme("borderRadius.md"),
      fontWeight: "600",
      display: "inline-block",
      textAlign: "center",
    },
    ".btn-solid": {
      backgroundColor: theme("colors.blue.500"),
      color: theme("colors.white"),
      "&:hover": {
        backgroundColor: theme("colors.blue.600"),
      },
    },
    ".btn-outline": {
      backgroundColor: "transparent",
      color: theme("colors.blue.500"),
      border: "2px solid",
      borderColor: theme("colors.blue.500"),
      "&:hover": {
        backgroundColor: theme("colors.blue.500"),
        color: theme("colors.white"),
      },
    },
    ".btn-ghost": {
      backgroundColor: "transparent",
      color: theme("colors.blue.500"),
      "&:hover": {
        backgroundColor: theme("colors.blue.100"),
      },
    },
    ".btn-primary": {
      backgroundColor: theme("colors.indigo.500"),
      color: theme("colors.white"),
      "&:hover": {
        backgroundColor: theme("colors.indigo.600"),
      },
    },
    ".btn-danger": {
      backgroundColor: theme("colors.rose.500"),
      color: theme("colors.white"),
      "&:hover": {
        backgroundColor: theme("colors.rose.600"),
      },
    },
    ".btn-custom": {
      backgroundColor: theme("colors.custom", theme("colors.teal.500")),
      color: theme("colors.white"),
      "&:hover": {
        backgroundColor: theme("colors.customHover", theme("colors.teal.500")),
      },
    },
  }

  addComponents(buttons, {
    variants: ["responsive", "hover", "focus"],
  })
}
