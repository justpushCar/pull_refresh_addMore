
 from react-touch-loader  修改了 部分bug  添加下拉加载 更多      并 同时兼容点击接加载更多

React component for web pull to refresh and load more, 下拉刷新, 加载更多

Live demo

demo http://libikun.sinaapp.com/

Usage
一
import css 里面的 loadeMore 插件   webpack 最好 有less 编译 也可以自己 编译后加入


二

import Tloader from 'react-touch-loader';

refresh(resolve, reject){
}
loadMore(resolve){
}	 
2个人方法 在 下拉刷新   和 touch pull down 是 触发

具体查看 components  下面的 loardMore.js
<Tloader
    initializing={initializing}
     canPullUpAddMore:{canPullUpAddMore}, 
    onRefresh={handleRefresh}
    hasMore={hasMore}
    onLoadMore={handleLoadMore}
    className="some class">
    <ul><li>some items</li></ul>
</Tloader>


