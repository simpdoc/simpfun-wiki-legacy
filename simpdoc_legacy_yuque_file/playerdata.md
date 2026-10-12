:::color2
💡 **提示**

本文档介绍MC Java版服务器中玩家数据的存放。

:::

:::color1
ℹ **提示**

playerdata文件夹的内容在1.7.6版本受到更改。但是考虑到应该没人开1.7.6以前的服，所以只介绍更改后的新版本内容。

如果想要了解旧版本内容，详见[minecraft wiki](https://zh.minecraft.wiki/w/Java%E7%89%88%E4%B8%96%E7%95%8C%E6%A0%BC%E5%BC%8F)。

:::

## <font style="color:rgb(28, 30, 33);">玩家数据存储方式</font>
### 26.1正式版及之后
从26.1-snapshot-6开始，玩家的数据统一存储在`/world/players/`的三个文件夹下。

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1775661680470-3f56c644-48c6-4582-8079-95332485e716.png)

玩家的大部分数据会储存在`/world/players/data/<uuid>.dat`的文件中，并且会在某些条件下在同目录下生成一个备份文件。

玩家的进度数据储存在`/world/players/advancements/<uuid>.json`内。

玩家的统计数据存储在`/world/players/stats/<uuid>.json`内。

### 1.21.11及之前
玩家的大部分数据会储存在`/world/playerdata/<uuid>.dat`的文件中，并且会在某些条件下在同目录下生成一个备份文件。

玩家的进度数据储存在`/world/advancements/<uuid>.json`内（仅在1.12后出现）。

玩家的统计数据存储在`/world/stats/<uuid>.json`内。

:::color5
<font style="color:rgb(28, 30, 33);">ℹ</font><font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">UUID是怎么生成的？</font>**

`<font style="color:rgb(28, 30, 33);">Minecraft</font>`<font style="color:rgb(28, 30, 33);">服务器中，玩家首次连入时会由服务器自动生成一个</font>`<font style="color:rgb(28, 30, 33);">UUID</font>`<font style="color:rgb(28, 30, 33);">。</font>

<font style="color:rgb(28, 30, 33);">若服务器开启了正版验证，则 </font>`<font style="color:rgb(28, 30, 33);">UUID</font>`<font style="color:rgb(28, 30, 33);"> 为此玩家正版账号所对应的 </font>`<font style="color:rgb(28, 30, 33);">UUID</font>`<font style="color:rgb(28, 30, 33);">。</font>

<font style="color:rgb(28, 30, 33);">若服务器关闭了正版验证，则 </font>`<font style="color:rgb(28, 30, 33);">UUID</font>`<font style="color:rgb(28, 30, 33);"> 将参照行业规范</font><sup><font style="color:rgb(28, 30, 33);">[注1]</font></sup><font style="color:rgb(28, 30, 33);">生成。</font>

<font style="color:rgb(28, 30, 33);">如需查看/计算玩家ID所对应的UUID可前往Minecraft Wiki：</font>

[计算器/玩家UUID - 中文 Minecraft Wiki](https://zh.minecraft.wiki/w/%E8%AE%A1%E7%AE%97%E5%99%A8/%E7%8E%A9%E5%AE%B6UUID?variant=zh-cn)

:::

> 注1：此处的行业规范指的是大部分MC启动器及服务端正常情况下产生的离线UUID，与上方计算器算出的结果相同，但是旧版的PCL2启动器所产生的UUID与行业规范不同，这点需要注意。
>

## <font style="color:rgb(28, 30, 33);">UUID对应文件</font>
:::warning
<font style="color:rgb(28, 30, 33);">⚠</font><font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">提示</font>**

<font style="color:rgb(28, 30, 33);">此文件用于缓存玩家的UUID（唯一标识符）和用户名的映射关系。这个文件主要用于加速玩家登录过程。因此其并不会保存玩家的数据。</font>

:::

`<font style="color:rgb(28, 30, 33);">UUID对应文件</font>`<font style="color:rgb(28, 30, 33);">以</font>`<font style="color:rgb(28, 30, 33);">usercache.json</font>`<font style="color:rgb(28, 30, 33);">为名，存储在服务器根目录下。</font>

<font style="color:rgb(28, 30, 33);">因为整个文件都是一个json中的值，所以以[开头，以]结尾，每个值之间由英文逗号</font>`<font style="color:rgb(28, 30, 33);">,</font>`<font style="color:rgb(28, 30, 33);">隔开。</font>

<font style="color:rgb(28, 30, 33);">以下是一个合法值的示例：</font>

```json
{"name":"kawaii_Elaina","uuid":"78a610e7-9107-4653-94b6-0a366ea5b950","expiresOn":"2023-07-27 00:11:19 +0800"}
```

<font style="color:rgb(28, 30, 33);">这个值表示，id为</font>`<font style="color:rgb(28, 30, 33);">kawaii_Elaina</font>`<font style="color:rgb(28, 30, 33);">的玩家的</font>`<font style="color:rgb(28, 30, 33);">uuid</font>`<font style="color:rgb(28, 30, 33);">为</font>`<font style="color:rgb(28, 30, 33);">78a610e7-9107-4653-94b6-0a366ea5b950</font>`<font style="color:rgb(28, 30, 33);">，该</font>`<font style="color:rgb(28, 30, 33);">uuid</font>`<font style="color:rgb(28, 30, 33);">将于</font>`<font style="color:rgb(28, 30, 33);">2023-07-27 00:11:19 +0800</font>`<font style="color:rgb(28, 30, 33);">（UTC+8 2023年7月27日0时11分19秒）时过期。</font>

## <font style="color:rgb(28, 30, 33);">特殊情况</font>
<font style="color:rgb(28, 30, 33);">因为验证方式的不同，玩家数据会有以下种类：</font>

:::info
+ 离线验证
+ 正版验证
+ 第三方服务器验证
+ （互通服）间歇泉插件写入 （大部分情况下与对应Java版账户的UUID相同，具体取决于服务器登录配置与Geyser登录配置）

:::

<font style="color:rgb(28, 30, 33);">其中各个验证方式之间的玩家数据均相互独立。</font>

:::success
<font style="color:rgb(28, 30, 33);">注：usercache.json可能分裂出来很多个，但是玩家数据本体始终以uuid为名存储在playerdata文件夹中。</font>

:::

<font style="color:rgb(28, 30, 33);">同时，因为数据种类不同，</font>**<font style="color:rgb(28, 30, 33);">如果一个服务器最多只同时允许一种验证方式，但是前后更换过验证方式，则因为玩家数据不通用会造成丢失。</font>**

## <font style="color:rgb(28, 30, 33);">迁移玩家数据：修改文件所对应的UUID名</font>
> <font style="color:rgb(28, 30, 33);">因为所有数据都以uuid为名存储在playerdata文件夹中，所以即使id相同，只要uuid不同，本质上都不是同一个玩家的数据。</font>
>
> <font style="color:rgb(28, 30, 33);">这样来看，不管是最简单的数据迁移——服务器并未更换验证模式，只是你换了个号（id）但想要继承上个id的数据——还是服务器启用了一大堆验证模式，有人某一种验证模式登不上了或者服务器选择弃用一种验证模式——</font>
>
> <font style="color:rgb(28, 30, 33);">——数据迁移的本质都相同，就是把一个玩家id的数据迁移到另一个id上。</font>
>
> <font style="color:rgb(28, 30, 33);">这样看的话，数据迁移方法就很明了了。</font>
>
> <font style="color:rgb(28, 30, 33);">我们的目的是让玩家id B用上玩家id A的数据，只要id B和数据A联系起来就行，所以，在playerdata文件夹中将.dat和.dat_old文件改名，就能达成效果。</font>
>

:::color2
💡 **提示**

所有修改文件的行为请在服务器关机状态下进行。

:::

<font style="color:rgb(28, 30, 33);">转到</font>`<font style="color:rgb(28, 30, 33);">world/players/data</font>`<font style="color:rgb(28, 30, 33);">(26.1及之后) / </font>`<font style="color:rgb(28, 30, 33);">/world/playerdata/</font>`<font style="color:rgb(28, 30, 33);">(1.21.11及之前)文件夹，你会看到一些dat和dat_old文件：</font>

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1762161015890-e5b54b39-c7e6-4b3b-8bb7-08d8e7fe02f9.png)

**<font style="color:rgb(28, 30, 33);"></font>**

**<font style="color:rgb(28, 30, 33);">下方为一个示例教程：</font>**

<font style="color:rgb(28, 30, 33);">以下为两名玩家的数据文件。现在我们需要把第一名玩家的数据迁移给第二名。</font>

:::color1
Player1：

`<font style="color:rgb(25, 60, 71);">78a610e7-9107-4653-94b6-0a366ea5b950.dat</font>`<font style="color:rgb(25, 60, 71);"> </font>_<font style="color:rgb(25, 60, 71);">640KB</font>_

`<font style="color:rgb(25, 60, 71);">78a610e7-9107-4653-94b6-0a366ea5b950.dat_old</font>`<font style="color:rgb(25, 60, 71);"> </font>_<font style="color:rgb(25, 60, 71);">640KB</font>_

:::

:::color5
Player2：

`0b881575-595b-4869-b555-4263433925a0.dat`<font style="color:rgb(25, 60, 71);"> </font>_<font style="color:rgb(25, 60, 71);">120KB</font>_

`0b881575-595b-4869-b555-4263433925a0.dat_old`<font style="color:rgb(25, 60, 71);"> </font>_<font style="color:rgb(25, 60, 71);">120KB</font>_

:::

**<font style="color:rgb(28, 30, 33);">操作方法：</font>**

1.复制第二名玩家的数据文件名，随后删除该文件。

2.将第一名玩家的数据文件重命名为复制的文件名。

<font style="color:rgb(28, 30, 33);">成功操作后，数据文件如下：</font>

:::color5
`<font style="color:rgb(28, 30, 33);">0b881575-595b-4869-b555-4263433925a0.dat</font>`<font style="color:rgb(28, 30, 33);"> </font>_<font style="color:rgb(28, 30, 33);">640KB</font>_

`<font style="color:rgb(28, 30, 33);">0b881575-595b-4869-b555-4263433925a0.dat_old</font>`<font style="color:rgb(28, 30, 33);"> </font>_<font style="color:rgb(28, 30, 33);">640KB</font>_

:::

<font style="color:rgb(28, 30, 33);">此时，第二名玩家再次连入游戏，他的玩家数据将使用原本第一名玩家的数据。</font>

---

_附：感谢1群内这名群友的批评，在此对于原本的错误描述感到深刻抱歉。同时，再次感谢他对错误的指出。_

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1753149936115-a649dc9d-e779-4972-8510-fe6e52300af6.png)



