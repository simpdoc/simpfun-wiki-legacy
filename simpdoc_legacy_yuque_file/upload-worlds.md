<font style="color:rgb(28, 30, 33);">本篇文档将会教你如何往Java版服务端导入存档。</font>

## <font style="color:rgb(28, 30, 33);">导入到非插件服务端</font>
:::info
ℹ<font style="color:rgb(28, 30, 33);"> 适用的服务端类型：</font>

+ <font style="color:rgb(28, 30, 33);">Vanilla（原版服务端）</font>
+ <font style="color:rgb(28, 30, 33);">Forge / NeoForge / Fabric 等模组端</font>
+ <font style="color:rgb(28, 30, 33);">Arclight / CatServer 等混合端</font>

:::

<font style="color:rgb(28, 30, 33);"></font>

<font style="color:rgb(28, 30, 33);">非常简单，直接将存档文件夹里的内容/下载的存档解压后的内容上传至服务端的</font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);">文件夹内即可（别忘了先把服务器里那个world里头的东西删了）。</font>

`<font style="color:rgb(28, 30, 33);">world</font>`<font style="color:rgb(28, 30, 33);">文件夹内的东西应如下所示：</font>

```plain
文件夹：
/advancements
/data
/datapacks
/DIM1
/DIM-1
/dimensions
/entities
/playerdata
/poi
/region
/serverconfig
/stats

文件：
/level.dat
/level.dat_old
/session.lock
```

:::color2
💡 提示

你的存档内这些东西不一定全都有，但是需要注意的是别又套了一层文件夹就行！

:::

## <font style="color:rgb(28, 30, 33);">导入到Bukkit系服务端</font>
<font style="color:rgb(28, 30, 33);">Bukkit系服务端(例如：Spigot、Paper、Purpur等服务端)的世界存储如下所示：</font>

| 服务端类型 | 主世界及其他数据 | 下界数据 | 末地数据 |
| --- | --- | --- | --- |
| Vanilla | /world | /world/DIM-1 | /world/DIM1 |
| Bukkit系服务端 | /world | /world_nether/DIM-1 | /world_the_end/DIM1 |


<font style="color:rgb(28, 30, 33);">导入步骤：</font>

1. <font style="color:rgb(28, 30, 33);">将存档文件夹里的内容/下载的存档解压后的内容上传至服务端的</font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);">文件夹内。</font>
2. <font style="color:rgb(28, 30, 33);">将</font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);">文件夹内的DIM-1文件夹放入根目录下的</font>`<font style="color:rgb(28, 30, 33);">/world_nether</font>`<font style="color:rgb(28, 30, 33);">。</font>
3. <font style="color:rgb(28, 30, 33);">将</font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);">文件夹内的DIM1文件夹放入根目录下的</font>`<font style="color:rgb(28, 30, 33);">/world_the_end</font>`<font style="color:rgb(28, 30, 33);">内。</font>

## <font style="color:rgb(28, 30, 33);">导入到Paper或Paper下游服务端</font>
:::info
ℹ 适用的服务端类型

Paper及下游各分支，包括但不限于Purpur，Leaves，Pufferfish等。

:::

<font style="color:rgb(28, 30, 33);">从Paper开始，提供了一套自动转换Vanilla格式存档为Bukkit存档的方法，虽然本质上操作和</font>上面<font style="color:rgb(28, 30, 33);">一样。</font>

<font style="color:rgb(28, 30, 33);">Paper及下游服务端均支持此方法导入。</font>

### <font style="color:rgb(28, 30, 33);">如何使用</font>
<font style="color:rgb(28, 30, 33);">按照导入</font>[到非插件服务端的方式](#pO28b)<font style="color:rgb(28, 30, 33);">操作即可，服务端会自动转换。</font>

<font style="color:rgb(28, 30, 33);">服务端版本应不低于1.12。</font>

