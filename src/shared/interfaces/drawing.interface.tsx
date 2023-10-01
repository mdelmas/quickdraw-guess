export type Line = {
  coord: {
    x: number[];
    y: number[];
    t: number[];
  };
  path: string;
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
  drawing: Line[];
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
