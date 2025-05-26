declare module 'qrcode.react' {
  import { Component } from 'react';

  interface QRCodeProps {
    value: string;
    size?: number;
    level?: 'L' | 'M' | 'Q' | 'H';
    bgColor?: string;
    fgColor?: string;
    style?: React.CSSProperties;
    includeMargin?: boolean;
    renderAs?: 'canvas' | 'svg';
  }

  export default class QRCode extends Component<QRCodeProps> {}
} 