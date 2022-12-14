import { Button } from "antd";
import CustormButtonStyle from "./style";

export type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  bgcolor: string;
  disabled?: boolean;
  width: string;
  color: string;
  padding: string;
  margin?: string;
  clicked?: () => void;
  form?: any;
  key?: string | number;
  fontSize: string;
  icon?: React.ReactNode;
  fontFamily?: string;
  borderRadius: string;
  height?: string;
};

const CustomButton = ({
  title,
  type,
  bgcolor,
  disabled,
  width,
  color,
  padding,
  clicked,
  form,
  key,
  fontSize,
  icon = undefined,
  fontFamily = "EnnVisions",
  borderRadius = "4px",
  height = "auto",
}: ButtonProps) => {
  return (
    <CustormButtonStyle
      bgcolor={bgcolor}
      color={color}
      width={width}
      padding={padding}
      fontSize={fontSize}
      fontFamily={fontFamily}
      borderRadius={borderRadius}
      height={height}
    >
      <Button
        disabled={disabled}
        form={form}
        key={key}
        onClick={clicked}
        htmlType={type}
        title={title}
        icon={icon}
      >
        {title}
      </Button>
    </CustormButtonStyle>
  );
};

export default CustomButton;
