import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const ID = useSelector((state: any) => state.ID);

  return ID ? <div> {children}</div> : <Navigate to="/auth/login" />;
};

export default PrivateRouter;
