import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const commentState = atom({
  key: "commentState",
  default: [],
   effects_UNSTABLE: [persistAtom],
});
