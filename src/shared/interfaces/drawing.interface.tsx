export type LineData = {
  coord: {
    x: number[];
    y: number[];
    t: number[];
  };
  duration: number;
  start: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Word = {
  name: string;
  guessed: boolean;
  drawing: LineData[];
};

export type DrawingData = {
  word: string;
  countrycode: string;
  timestamp: string;
  recognized: boolean;
  drawing: number[][][];
};

export type Margins = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};
