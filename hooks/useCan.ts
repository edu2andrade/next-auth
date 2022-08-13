import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUsersPermissions";

type useCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: useCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  };

 const userHasVaidPermissions = validateUserPermissions({
  user, 
  permissions,
  roles,
 })

  return userHasVaidPermissions;
}