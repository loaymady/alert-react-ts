import { X } from "lucide-react";
import "./Alert.scss";
import { ReactNode, useState } from "react"; // Import useState
import { AlertTypes } from "../types/types";

interface IProps {
  type: AlertTypes;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span onClick={handleClose}>
          <X size={20} />
        </span>
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  ) : null;
};

export default Alert;
