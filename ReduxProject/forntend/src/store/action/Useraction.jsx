import axios from '../../api/axiosconfig';
import { loadUser, removeUser } from '../Reducers/UserSlice';

// Get current user from localStorage
export const asyncCurrentUser = () => async (dispatch) => {
    try {
        const currUser = JSON.parse(localStorage.getItem("loggeduser"));

        if (currUser) {
            dispatch(loadUser(currUser));
        } else {
            console.log("User not logged in");
        }
    } catch (error) {
        console.error("Error loading current user:", error);
    }
};


// Logout user
export const asynclogoutuser = () => async (dispatch) => {
    try {
        localStorage.removeItem("loggeduser");

        dispatch(removeUser(null));
        console.log("Logout successful");
    } catch (error) {
        console.error("Logout error:", error);
    }
};


// Login user
export const asyncuserlogin = (user) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        console.log(data)

        if (data.length > 0) {
            localStorage.setItem(
                "loggeduser",
                JSON.stringify(data[0])
            );

            dispatch(loadUser(data[0]));

            return {
                success: true,
                message: "Login successful"
            };
        } else {
            return {
                success: false,
                message: "Invalid email or password"
            };
        }
    } catch (error) {
        console.error("Login error:", error);

        return {
            success: false,
            message: "Something went wrong. Please try again."
        };
    }
};


// Register user
export const asynceregisteruser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.post("/users", user);

        console.log("User registered successfully", data);
    } catch (error) {
        console.error("Register error:", error);
    }
};


// Update user
export const asyncUpdateUser = (userid, user) => async (dispatch) => {
    try {
        const { data } = await axios.patch(
            "/users/" + userid,
            user
        );

        // Update localStorage
        localStorage.setItem(
            "loggeduser",
            JSON.stringify(data)
        );

        // Update Redux
        dispatch(loadUser(data));

        console.log("User updated successfully");
    } catch (error) {
        console.error("Update user error:", error);
    }
};


// Delete user + Logout
export const asyncDeleteUser = (userid) => async (dispatch) => {
    try {
        await axios.delete("/users/" + userid);

        // Delete hone ke baad logout
        dispatch(asynclogoutuser());

    } catch (error) {
        console.error("Delete user error:", error);
    }
};


// Get all users
export const userdata = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/users");

        dispatch(loadUser(data));
    } catch (error) {
        console.error("Get users error:", error);
    }
};