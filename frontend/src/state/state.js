import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const postState = atom({
  key: "postState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
