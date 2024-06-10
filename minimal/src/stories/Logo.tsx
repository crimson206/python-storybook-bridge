import { any } from 'prop-types';
import React from 'react';

export const defaultProps = {
    width: 500, // 기본 너비
    height: 100, // 기본 높이
    gap: 20, // 도형 사이 간격
    degrees: 20, // 기울기
    textSize: 30, // 텍스트 크기
    leftColor: 'MediumBlue',
    rightColor: 'DeepPink',
    textUpShift: 10,
  }

interface LogoProps {
    width:number
    height:number
    gap:number
    degrees:number
    textSize:number
    leftColor:string
    rightColor:string
    textUpShift:number
}

const Logo : React.FC<LogoProps> = ({
    width,
    height,
    gap,
    degrees,
    textSize,
    leftColor,
    rightColor,
    textUpShift,
}) => {

  const leftEnd = (width - gap) / 2
  const rightStart = (width + gap) / 2
  const radians = degrees * Math.PI / 180;
  const sinValue = Math.tan(radians) * height/ 2;
  const rightUpX = rightStart + sinValue
  const rightDownX = rightStart - sinValue
  const leftUpX = leftEnd + sinValue
  const leftDownX = leftEnd - sinValue

  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <polygon points={`0,0 ${leftUpX},0 ${leftDownX},${height} 0,${height}`} fill={leftColor} />
      <polygon points={`${rightUpX},0 ${width},0 ${width},${height} ${rightDownX},${height}`} fill={rightColor} />
      <text x={`${leftEnd / 2}`} y={`${height / 2 + textUpShift}`} fontSize={textSize} fontWeight="bold" fill="white" fontFamily="Arial, sans-serif" textAnchor="middle">
        Python
      </text>
      <text x={`${(rightStart + width)/2}`} y={`${height / 2 + textUpShift}`} fontSize={textSize} fontWeight="bold" fill="white" fontFamily="Arial, sans-serif" textAnchor="middle">
        Storybook
      </text>
    </svg>
  );
};

export default Logo;
