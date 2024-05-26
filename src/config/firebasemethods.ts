import app from "./firebaseconfig";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app)

export const sendData = (nodeName: string, obj: any) => {
    const reference = ref(db, nodeName)
    return set(reference, obj)
}


// let database = {
//     users: {
//         asda43lkj53lkj45k34: {
//             name: 'ABC',
//             age: 18,
//         },
//         oi4u534u5oi3u45oi3j: {},
//         klk35o43iu53o4u53u4: {},
//     },
//     products: {
//         asda43lkj53lkj45k34: {},
//         oi4u534u5oi3u45oi3j: {},
//         klk35o43iu53o4u53u4: {},
//     },
//     orders: {
//         asda43lkj53lkj45k34: {},
//         oi4u534u5oi3u45oi3j: {},
//         klk35o43iu53o4u53u4: {},
//     },
// }