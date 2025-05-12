type ColorSet = {
  background: string;
  textColors: string[];
  cta: {
    background: string;
    color: string;
    textStroke: string;
    btnStroke: string;
  };
  highlight: string;
};

type ColorsType = {
  short: ColorSet[];
  medium: ColorSet[];
  long: ColorSet[];
};

export const colors: ColorsType = {
  // One text + call to action
  short: [
    // {
    //   background: "#FFDE67",
    //   textColors: ["#FFFFFF"],
    //   cta: {
    //     background: "#0085FF",
    //     color: "#FFFFFF",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#5CD92A",
    // },
    // {
    //   background: "#FFB967",
    //   textColors: ["#FF3D00"],
    //   cta: {
    //     background: "#FFE600",
    //     color: "#FFFFFF",
    //     textStroke: "#000000",
    //     btnStroke: "#FF3D00",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#FF8267",
    //   textColors: ["#FFF500"],
    //   cta: {
    //     background: "#42FF00",
    //     color: "#FFFFFF",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#FFFFFF",
    //   textColors: ["#FF6F6F"],
    //   cta: {
    //     background: "#00FF38",
    //     color: "#24FF00",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#FBEDBB",
    //   textColors: ["#FFFFFF"],
    //   cta: {
    //     background: "#FF7B7B",
    //     color: "#FF2525",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#BCFBBB",
    //   textColors: ["#14FF00"],
    //   cta: {
    //     background: "#CCFF00",
    //     color: "#EBFF00",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#14FF00",
    // },

    // New color schema
    {
      background: "#FFDE67",
      textColors: ["#FFFFFF"],
      cta: {
        background: "#0085FF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#FFD1DC",
      textColors: ["#5C5C5C"],
      cta: {
        background: "#FF5E78",
        color: "#FFFFFF",
        textStroke: "#000000", // світлий текст — темний обвід
        btnStroke: "#FF5E7880",
      },
      highlight: "#FF8A5B",
    },
    {
      background: "#A0E7E5",
      textColors: ["#053742"],
      cta: {
        background: "#00B8A9",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00B8A980",
      },
      highlight: "#FCD757",
    },
    {
      background: "#FFF3B0",
      textColors: ["#5E4AE3"],
      cta: {
        background: "#5E4AE3",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00000020",
      },
      highlight: "#F46036",
    },
    {
      background: "#C1FBA4",
      textColors: ["#003844"],
      cta: {
        background: "#006C67",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#006C6780",
      },
      highlight: "#FFBA49",
    },
    {
      background: "#E0BBE4",
      textColors: ["#1A1A1A"],
      cta: {
        background: "#957DAD",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#957DAD60",
      },
      highlight: "#FEC8D8",
    },
    {
      background: "#A9DEF9",
      textColors: ["#222831"],
      cta: {
        background: "#00ADB5",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00ADB580",
      },
      highlight: "#F8B400",
    },
    {
      background: "#D0F4DE",
      textColors: ["#2F3E46"],
      cta: {
        background: "#52796F",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#52796F80",
      },
      highlight: "#FF9F1C",
    },
    {
      background: "#FFF5E1",
      textColors: ["#2E4057"],
      cta: {
        background: "#FF6B6B",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF6B6B80",
      },
      highlight: "#FFE66D",
    },
    {
      background: "#BDE0FE",
      textColors: ["#1D3557"],
      cta: {
        background: "#457B9D",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#457B9D40",
      },
      highlight: "#F4A261",
    },
    {
      background: "#FAF0CA",
      textColors: ["#222222"],
      cta: {
        background: "#1982C4",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#1982C480",
      },
      highlight: "#FF595E",
    },
    {
      background: "#D0F0FD",
      textColors: ["#0D3B66"],
      cta: {
        background: "#F95738",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#F9573880",
      },
      highlight: "#F4D35E",
    },
    {
      background: "#FFE0AC",
      textColors: ["#5B3714"],
      cta: {
        background: "#9A031E",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#9A031E80",
      },
      highlight: "#FB8B24",
    },
    {
      background: "#CDF0EA",
      textColors: ["#344E41"],
      cta: {
        background: "#3A86FF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#3A86FF80",
      },
      highlight: "#FFBE0B",
    },
    {
      background: "#FFDAC1",
      textColors: ["#1C1C1C"],
      cta: {
        background: "#FF6F59",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF6F5980",
      },
      highlight: "#247BA0",
    },
    {
      background: "#E2F0CB",
      textColors: ["#14281D"],
      cta: {
        background: "#00A896",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00A89680",
      },
      highlight: "#F79256",
    },
    {
      background: "#FEC8D8",
      textColors: ["#3D2C2E"],
      cta: {
        background: "#FF5D8F",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF5D8F80",
      },
      highlight: "#B388EB",
    },
    {
      background: "#C4FFF9",
      textColors: ["#1C1C1C"],
      cta: {
        background: "#006D77",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#006D7780",
      },
      highlight: "#FFDDD2",
    },
    {
      background: "#E0C3FC",
      textColors: ["#301934"],
      cta: {
        background: "#7F00FF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#7F00FF80",
      },
      highlight: "#FB9D5C",
    },
    {
      background: "#FFFCF2",
      textColors: ["#252422"],
      cta: {
        background: "#EB5E28",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#EB5E2880",
      },
      highlight: "#CCC5B9",
    },
  ],

  // Two texts + call to action
  medium: [
    // {
    //   background: "#FFDE67",
    //   textColors: ["#FFFFFF", "#000000"],
    //   cta: {
    //     background: "#0085FF",
    //     color: "#FFFFFF",
    //     textStroke: "",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#5CD92A",
    // },
    // {
    //   background: "#B2FFC3",
    //   textColors: ["#FF0000", "#000000"],
    //   cta: {
    //     background: "#fff",
    //     color: "#FF0000",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#5CD92A",
    // },
    // {
    //   background: "#FFB967",
    //   textColors: ["#FF3D00", "#000000"],
    //   cta: {
    //     background: "#FFE600",
    //     color: "#FFFFFF",
    //     textStroke: "#000000",
    //     btnStroke: "#FF3D00",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#FF8267",
    //   textColors: ["#FFF500", "#FFFFFF"],
    //   cta: {
    //     background: "#42FF00",
    //     color: "#FFFFFF",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#FFFFFF",
    //   textColors: ["#FF6F6F", "#FFF500"],
    //   cta: {
    //     background: "#00FF38",
    //     color: "#24FF00",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#FBEDBB",
    //   textColors: ["#FFFFFF", "#00FF0A"],
    //   cta: {
    //     background: "#FF7B7B",
    //     color: "#FF2525",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#0085FF",
    // },
    // {
    //   background: "#BCFBBB",
    //   textColors: ["#14FF00", "#FFFFFF"],
    //   cta: {
    //     background: "#CCFF00",
    //     color: "#EBFF00",
    //     textStroke: "#000000",
    //     btnStroke: "#00000040",
    //   },
    //   highlight: "#14FF00",
    // },

    // New color schema

    {
      background: "#C2F0FF",
      textColors: ["#0044FF", "#000000"],
      cta: {
        background: "#0055FF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00224440",
      },
      highlight: "#00FFB3",
    },
    {
      background: "#FEC8D8",
      textColors: ["#A1003C", "#000000"],
      cta: {
        background: "#FF6392",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#A1003C80",
      },
      highlight: "#FFE156",
    },
    {
      background: "#E6FFB2",
      textColors: ["#1F9100", "#3A3A3A"],
      cta: {
        background: "#91FF00",
        color: "#1A1A1A",
        textStroke: "#FFFFFF",
        btnStroke: "#00000040",
      },
      highlight: "#FFA07A",
    },
    {
      background: "#D3C0FF",
      textColors: ["#240090", "#000000"],
      cta: {
        background: "#7D5FFF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#24009060",
      },
      highlight: "#FFB627",
    },
    {
      background: "#FFF5C3",
      textColors: ["#FF3C00", "#2E2E2E"],
      cta: {
        background: "#FF9F1C",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF3C0080",
      },
      highlight: "#00D9C0",
    },
    {
      background: "#D9F7BE",
      textColors: ["#003B00", "#000000"],
      cta: {
        background: "#52C41A",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#003B0040",
      },
      highlight: "#FFAA00",
    },
    {
      background: "#FFD1E3",
      textColors: ["#65003C", "#000000"],
      cta: {
        background: "#FF4D6D",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#65003C40",
      },
      highlight: "#A0E8AF",
    },
    {
      background: "#FFF0F0",
      textColors: ["#FF6161", "#262626"],
      cta: {
        background: "#FF2D2D",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF2D2D40",
      },
      highlight: "#00D1FF",
    },
    {
      background: "#BBF0FF",
      textColors: ["#003349", "#000000"],
      cta: {
        background: "#00B4D8",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00334940",
      },
      highlight: "#FFEA00",
    },
    {
      background: "#F7FFD1",
      textColors: ["#336600", "#000000"],
      cta: {
        background: "#C0FF00",
        color: "#336600",
        textStroke: "#FFFFFF",
        btnStroke: "#33660040",
      },
      highlight: "#FF69B4",
    },
    {
      background: "#FFF1E6",
      textColors: ["#FF4C29", "#000000"],
      cta: {
        background: "#FF9500",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF4C2940",
      },
      highlight: "#38B000",
    },
    {
      background: "#E5FFDE",
      textColors: ["#006400", "#000000"],
      cta: {
        background: "#00C853",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00640040",
      },
      highlight: "#FFD600",
    },
    {
      background: "#D0E8F2",
      textColors: ["#003566", "#000000"],
      cta: {
        background: "#1E6091",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00356640",
      },
      highlight: "#FFD166",
    },
    {
      background: "#FDE2FF",
      textColors: ["#6A0572", "#000000"],
      cta: {
        background: "#9D4EDD",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#6A057240",
      },
      highlight: "#FEC89A",
    },
    {
      background: "#E2F0CB",
      textColors: ["#7D5A50", "#000000"],
      cta: {
        background: "#A26769",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#7D5A5040",
      },
      highlight: "#F6BD60",
    },
    {
      background: "#FFEBF0",
      textColors: ["#B3001B", "#000000"],
      cta: {
        background: "#E63946",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#B3001B40",
      },
      highlight: "#A8DADC",
    },
    {
      background: "#D6F8D6",
      textColors: ["#3A5A40", "#000000"],
      cta: {
        background: "#588157",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#3A5A4040",
      },
      highlight: "#FFBA08",
    },
    {
      background: "#E5E5E5",
      textColors: ["#212121", "#FF1744"],
      cta: {
        background: "#424242",
        color: "#FF1744",
        textStroke: "#FFFFFF",
        btnStroke: "#00000040",
      },
      highlight: "#00BFA5",
    },
    {
      background: "#D0EFFF",
      textColors: ["#0077B6", "#000000"],
      cta: {
        background: "#00B4D8",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#0077B640",
      },
      highlight: "#FDC500",
    },
    {
      background: "#FFF5E4",
      textColors: ["#FF5E00", "#000000"],
      cta: {
        background: "#FF7F11",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF5E0040",
      },
      highlight: "#00C49A",
    },
  ],
  // Three texts + call to action
  long: [
    {
      background: "#FFDE67",
      textColors: ["#FFFFFF", "#000000", "#000000"],
      cta: {
        background: "#0085FF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#FFB967",
      textColors: ["#FF3D00", "#000000", "#000000"],
      cta: {
        background: "#FFE600",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF3D00",
      },
      highlight: "#0085FF",
    },
    {
      background: "#FF8267",
      textColors: ["#FFF500", "#FFFFFF", "#FFFFFF"],
      cta: {
        background: "#42FF00",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#0085FF",
    },
    {
      background: "#FFFFFF",
      textColors: ["#FF6F6F", "#FFF500", "#FF6F6F"],
      cta: {
        background: "#00FF38",
        color: "#24FF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#0085FF",
    },
    {
      background: "#FBEDBB",
      textColors: ["#FFFFFF", "#00FF0A", "#FFFFFF"],
      cta: {
        background: "#FF7B7B",
        color: "#FF2525",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#0085FF",
    },
    {
      background: "#BCFBBB",
      textColors: ["#14FF00", "#FFFFFF", "#CCFF00"],
      cta: {
        background: "#CCFF00",
        color: "#EBFF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#14FF00",
    },

    //  New color schema

    {
      background: "#FFDE67",
      textColors: ["#FFFFFF", "#000000", "#000000"],
      cta: {
        background: "#0085FF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#B2FFC3",
      textColors: ["#FF0000", "#000000", "#008000"],
      cta: {
        background: "#FFFFFF",
        color: "#FF0000",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#FFB967",
      textColors: ["#FF3D00", "#000000", "#4E4E4E"],
      cta: {
        background: "#FFE600",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF3D00",
      },
      highlight: "#0085FF",
    },
    {
      background: "#FF8267",
      textColors: ["#FFF500", "#FFFFFF", "#000000"],
      cta: {
        background: "#42FF00",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#0085FF",
    },
    {
      background: "#FFFFFF",
      textColors: ["#FF6F6F", "#FFF500", "#000000"],
      cta: {
        background: "#00FF38",
        color: "#24FF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#0085FF",
    },
    {
      background: "#FBEDBB",
      textColors: ["#FFFFFF", "#00FF0A", "#333333"],
      cta: {
        background: "#FF7B7B",
        color: "#FF2525",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#0085FF",
    },
    {
      background: "#BCFBBB",
      textColors: ["#14FF00", "#FFFFFF", "#005500"],
      cta: {
        background: "#CCFF00",
        color: "#EBFF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#14FF00",
    },
    {
      background: "#FEC8D8",
      textColors: ["#A1003C", "#000000", "#FF6699"],
      cta: {
        background: "#FF6392",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#A1003C80",
      },
      highlight: "#FFE156",
    },
    {
      background: "#E6FFB2",
      textColors: ["#1F9100", "#3A3A3A", "#004400"],
      cta: {
        background: "#91FF00",
        color: "#1A1A1A",
        textStroke: "#FFFFFF",
        btnStroke: "#00000040",
      },
      highlight: "#FFA07A",
    },
    {
      background: "#D3C0FF",
      textColors: ["#240090", "#000000", "#7A5EFF"],
      cta: {
        background: "#7D5FFF",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#24009060",
      },
      highlight: "#FFB627",
    },
    {
      background: "#FFF5C3",
      textColors: ["#FF3C00", "#2E2E2E", "#000000"],
      cta: {
        background: "#FF9F1C",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF3C0080",
      },
      highlight: "#00D9C0",
    },
    {
      background: "#D9F7BE",
      textColors: ["#003B00", "#000000", "#2F8238"],
      cta: {
        background: "#52C41A",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#003B0040",
      },
      highlight: "#FFAA00",
    },
    {
      background: "#FFD1E3",
      textColors: ["#65003C", "#000000", "#FF99BB"],
      cta: {
        background: "#FF4D6D",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#65003C40",
      },
      highlight: "#A0E8AF",
    },
    {
      background: "#FFF0F0",
      textColors: ["#FF6161", "#262626", "#000000"],
      cta: {
        background: "#FF2D2D",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#FF2D2D40",
      },
      highlight: "#00D1FF",
    },
    {
      background: "#BBF0FF",
      textColors: ["#003349", "#000000", "#29B6F6"],
      cta: {
        background: "#00B4D8",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00334940",
      },
      highlight: "#FFEA00",
    },
    {
      background: "#F7FFD1",
      textColors: ["#336600", "#000000", "#558B2F"],
      cta: {
        background: "#C0FF00",
        color: "#336600",
        textStroke: "#FFFFFF",
        btnStroke: "#33660040",
      },
      highlight: "#FF69B4",
    },
    {
      background: "#F5F5F5",
      textColors: ["#424242", "#000000", "#757575"],
      cta: {
        background: "#00BCD4",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#00838F40",
      },
      highlight: "#FFEB3B",
    },
    {
      background: "#FFF9C4",
      textColors: ["#F57F17", "#000000", "#795548"],
      cta: {
        background: "#FBC02D",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#F57F1740",
      },
      highlight: "#00ACC1",
    },
    {
      background: "#E3F2FD",
      textColors: ["#0D47A1", "#000000", "#1E88E5"],
      cta: {
        background: "#2196F3",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#0D47A140",
      },
      highlight: "#FF6F61",
    },
    {
      background: "#FFF3E0",
      textColors: ["#BF360C", "#000000", "#FF5722"],
      cta: {
        background: "#FF7043",
        color: "#FFFFFF",
        textStroke: "#000000",
        btnStroke: "#BF360C40",
      },
      highlight: "#00C853",
    },
  ],
};
