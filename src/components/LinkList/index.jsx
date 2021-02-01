// import { Divider } from "@react-md/divider"
// import { TextIconSpacing } from "@react-md/icon"
// import { Button } from "@react-md/button"
import { FontIcon } from "@react-md/icon"
import { List } from "@react-md/list"
import { MenuItemLink } from "@react-md/menu"
// import { Link as RouterLink } from "gatsby"
import React from "react"
// import myList from "./myList"

const LinkListItems = [
  {
    id: 1,
    name: "翻譯",
    link:
      "https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN",
    icon: <FontIcon>g_translate</FontIcon>,
  },
  {
    id: 2,
    name: "日報",
    link:
      "https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit?ouid=116808363677895581574&usp=sheets_home&ths=true",
    icon: <FontIcon>insert_invitation</FontIcon>,
  },
  {
    id: 3,
    name: "批注詞",
    link:
      "https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit",
    icon: <FontIcon>text_snippet</FontIcon>,
  },
  {
    id: 4,
    name: "計算",
    link:
      "https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0",
    icon: <FontIcon>calculate</FontIcon>,
  },
  {
    id: 5,
    name: "共用",
    link:
      "https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws/edit#gid=1653933803",
    icon: <FontIcon>group_add</FontIcon>,
  },
  {
    id: 6,
    name: "採購部",
    link:
      "https://docs.google.com/spreadsheets/d/1TBm2PKXAb9ihChkjfeFgtiCJ7wk8KV6K7NvM5_RkhoQ/edit#gid=0",
    icon: <FontIcon>folder_shared</FontIcon>,
  },
]

const LinkList = () => {
  // const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <>
      <List
        role="menu"
        className="lg:w-1/2 w-full border border-gray-400 border-opacity-60 divide-y-2 divide-gray-400 divide-opacity-60 rounded my-3 mx-auto"
      >
        {LinkListItems.map((items, i) => (
          <MenuItemLink
            href={items.link}
            target="_blank"
            rel="noreferrer"
            key={i}
            id={`list-item-${i}`}
            leftAddon={items.icon}
          >
            {items.name}
          </MenuItemLink>
        ))}
      </List>
    </>
  )
}
export default LinkList
