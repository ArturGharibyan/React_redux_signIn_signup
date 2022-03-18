import { data } from "./state";

const reducer = (state = data, action) => {
    const temp = { ...state }
    switch (action.type) {
        case "adduser":
            temp.users.push(action.value)
            break;

    }
    return temp
}

export default reducer


