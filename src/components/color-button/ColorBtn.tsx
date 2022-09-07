import React from "react"
interface IProps {
    color: string
    onClick?: (color: string) => void
}
const ColorBtn = (props: IProps) => {
    const {color, onClick} = props;
    return <button style={{color}} onClick={() => onClick && onClick(color)}>Color Button</button>
}
export default ColorBtn;