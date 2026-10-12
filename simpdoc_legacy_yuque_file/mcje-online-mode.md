:::warning
我们并不提倡使用非正版进行游玩，如无必要，请勿关闭正版验证！

:::

_<font style="color:rgb(28, 30, 33);">注：似乎SFE4中的预设默认关闭正版验证（在线模式）来着</font>_

<font style="color:rgb(28, 30, 33);">想和朋友联机但是没有正版？只需在服务器内关闭正版验证即可轻松联机！</font>

## <font style="color:rgb(28, 30, 33);">正版和非正版的区别？</font>
| | **正版** | **非正版** |
| --- | --- | --- |
| **皮肤** | 只需在官网设置好，即可使用！ | 需使用其它办法实现皮肤显示，否则为默认皮肤 |
| **服务器连接** | 可以游玩正版服务器，如hyp(由于正版验证API原因，位于国内的正版服务器可能会出现无法连接的问题) | 只能游玩离线服，但由于无需验证服务器验证，连接相对流畅 |


## <font style="color:rgb(28, 30, 33);">修改配置文件来关闭验证</font>
:::warning
⚠ **提示**

`server.properties`不支持热重载，请在关闭服务器的情况下对其进行修改。

:::

<font style="color:rgb(28, 30, 33);">进入服务器文件管理，在根目录找到</font>`<font style="color:rgb(28, 30, 33);">server.properties</font>`<font style="color:rgb(28, 30, 33);">文件并打开;</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718170402038-75583c2c-c74b-4b73-9b11-53cb79bc224e.png)

<font style="color:rgb(28, 30, 33);">在其中找到这一行:</font>

```properties
online-mode=true
```

<font style="color:rgb(28, 30, 33);">将</font>`<font style="color:rgb(28, 30, 33);">true</font>`<font style="color:rgb(28, 30, 33);">改为</font>`<font style="color:rgb(28, 30, 33);">false</font>`<font style="color:rgb(28, 30, 33);">即可关闭正版验证。</font>

:::color2
**支持正版！**

### 如果条件允许，我们建议您通过微软商店购买正版！
:::

## <font style="color:rgb(28, 30, 33);">后话（萌新慎入</font>
<font style="color:rgb(28, 30, 33);">自从1.20开始游戏内置了皮肤，离线服务器下玩家外观不再只有Steve和Alex两个皮肤，而是各种各样……</font>

<font style="color:rgb(28, 30, 33);">但是进入服务器后，你分配到的皮肤大概率会是</font>~~<font style="color:rgb(28, 30, 33);">内个</font>~~<font style="color:rgb(28, 30, 33);">黑人。</font>

:::danger
🔥 **警告**

以下内容萌新勿入！

如果觉得**默认分配出的皮肤不好看**同时不想买正版，可以阅读此文档来为你的服务器启用**第三方登录:**

[进阶教程：为服务器启用第三方登录](https://www.yuque.com/simpfox/simpdoc/authlib-injector)

再次温馨提示：开服小白请勿选用第三方登录，问问题被骂不管编者事！~~（逃~~

:::

