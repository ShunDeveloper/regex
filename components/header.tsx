import "../styles/globals.css";
import { memo } from "react";

const Header = memo(() => {
  return (
    <div className="py-[2%] pl-[3%] bg-gray-800">
      <h1 className="text-gray-50 text-[30px]">正規表現検索ページ</h1>
      <p className="text-gray-300">
        正規表現をtagや文字列で検索することが出来るサイトです
      </p>
    </div>
  );
});

export default Header;
