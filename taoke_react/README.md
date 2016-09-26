
 from react-touch-loader  修改了 部分bug  添加下拉加载 更多      并 同时兼容点击接加载更多

React component for web pull to refresh and load more, 下拉刷新, 加载更多

Live demo

demo http://libikun.sinaapp.com/

user        
一
          import css 里面的 loadeMore 插件   webpack 最好 有less 编译 也可以自己 编译后加入


二

import Tloader from '*/loadeMore';

refresh(resolve, reject){
//do
}
loadMore(resolve){
//do
}	 
2个方法 在 下拉刷新   和 向上拉取 时 触发
<Tloader
    initializing={initializing}
     canPullUpAddMore:{canPullUpAddMore}, 
    onRefresh={handleRefresh}
    hasMore={hasMore}
    onLoadMore={handleLoadMore}
    className="some class">
    <ul><li>some items</li></ul>
</Tloader>
具体使用查看 components   下面的 loardMore.js



