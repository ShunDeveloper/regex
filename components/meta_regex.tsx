import regex_data from "../libs/type_components";

// meta文字のリスト

const meta_regex_list: regex_data[] = [
  {
    syntax: "^",
    tag: ["アンカー", "基本文法"],
    meaning: "直前の文字が最初",
  },
  {
    syntax: "$",
    tag: ["アンカー", "基本文法"],
    meaning: "直前の文字が最後",
  },
];

export default meta_regex_list;
