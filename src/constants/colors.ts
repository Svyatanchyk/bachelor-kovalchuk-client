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
    {
      background: "#FFDE67",
      textColors: ["#FFFFFF"],
      cta: {
        background: "#0085FF",
        color: "#FFFFFF",
        textStroke: "",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#FFB967",
      textColors: ["#FF3D00"],
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
      textColors: ["#FFF500"],
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
      textColors: ["#FF6F6F"],
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
      textColors: ["#FFFFFF"],
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
      textColors: ["#14FF00"],
      cta: {
        background: "#CCFF00",
        color: "#EBFF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#14FF00",
    },
  ],
  // Two texts + call to action
  medium: [
    {
      background: "#FFDE67",
      textColors: ["#FFFFFF", "#000000"],
      cta: {
        background: "#0085FF",
        color: "#FFFFFF",
        textStroke: "",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#FFB967",
      textColors: ["#FF3D00", "#000000"],
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
      textColors: ["#FFF500", "#FFFFFF"],
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
      textColors: ["#FF6F6F", "#FFF500"],
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
      textColors: ["#FFFFFF", "#00FF0A"],
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
      textColors: ["#14FF00", "#FFFFFF"],
      cta: {
        background: "#CCFF00",
        color: "#EBFF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#14FF00",
    },
  ],
  // Three texts + call to action
  long: [
    {
      background: "#FFDE67",
      textColors: ["#FFFFFF", "#000000"],
      cta: {
        background: "#0085FF",
        color: "#FFFFFF",
        textStroke: "",
        btnStroke: "#00000040",
      },
      highlight: "#5CD92A",
    },
    {
      background: "#FFB967",
      textColors: ["#FF3D00", "#000000"],
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
      textColors: ["#FFF500", "#FFFFFF"],
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
      textColors: ["#FF6F6F", "#FFF500"],
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
      textColors: ["#FFFFFF", "#00FF0A"],
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
      textColors: ["#14FF00", "#FFFFFF"],
      cta: {
        background: "#CCFF00",
        color: "#EBFF00",
        textStroke: "#000000",
        btnStroke: "#00000040",
      },
      highlight: "#14FF00",
    },
  ],
};
