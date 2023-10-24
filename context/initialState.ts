import { fetchRole, fetchUser } from "@/hooks/fetchLocalStorageData";

const userInfo = fetchUser();
const userRole = fetchRole();

const initialState = {
    user: userInfo,
    role: userRole
}

export default initialState