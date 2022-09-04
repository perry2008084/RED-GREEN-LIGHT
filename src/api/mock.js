import { PAGE_MODE_NORMAL } from '../constants';

export const MOCK_DATA = {
  mode: PAGE_MODE_NORMAL,
  activeCategory: 0,
  navs: [
    {
      categoryId: 0,
      category: "个人",
      content: [
        {
          title: "搜索",
          links: [
            { name: "谷歌", href: "https://www.google.com" },
            { name: "鸭子", href: "https://www.duckduckgo.com" },
            { name: "必应", href: "https://www.bing.com" },
          ],
        },
        {
          title: "阅读",
          links: [
            { name: "微信读书", href: "https://r.qq.com/" },
            { name: "dictionary", href: "https://www.dictionary.com" },
            { name: "古诗文", href: "https://m.gushiwen.cn/" },
            { name: "zlibrary", href: "https://zlibrary.org/" },
            { name: "zepub", href: "https://z-epub.com/" },
            { name: "libgen", href: "http://libgen.is/" },
          ],
        },
      ],
    },
    {
      categoryId: 1,
      category: "视频",
      content: [
        {
          title: "在线",
          links: [
            { name: "腾讯", href: "https://v.qq.com" },
            { name: "B站", href: "https://bilibili.com" },
          ],
        },
        {
          title: "直播",
          links: [
            { name: "抖音", href: "https://www.douyin.com/" },
            { name: "快手", href: "https://www.kuaishou.com/cn" },
          ],
        },
      ],
    },
    {
      categoryId: 2,
      category: "音乐",
      content: [
        {
          title: "主流",
          links: [
            { name: "腾讯", href: "https://music.qq.com/" },
            { name: "网易云音乐", href: "https://music.163.com/" },
          ],
        },
        {
          title: "小众",
          links: [
            { name: "youtue music", href: "https://music.youtube.com" },
          ],
        },
      ],
    },
  ],
};