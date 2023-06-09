import type { AuthText } from "@/types/Text/Auth/AuthText";
import Authenticate from "@/components/Form/Authenticate";
const text: AuthText = {
  head: "サインアップ",
  subhead: {
    p: "既にアカウントをお持ちですか？",
    link: {
      text: "こちらでログイン",
      href: "/login"
    },
  },
  googleText: "サインアップ",
  authBtnText: "サインアップ"
};

export default function Home() {
  return (
    <Authenticate {...text}/>
  );
}
