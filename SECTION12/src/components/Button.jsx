import './Button.css';
const Button = ({text, type, onClick}) => {
    return (
        <button onClick={onClick} className={`Button Button_${type}`}>{text}</button>//버튼 클래스의 이름은 타입에 따라서 달라짐
    );
}

export default Button;