<font style="color:rgb(28, 30, 33);">本篇文档将介绍如何从服务端导出存档。</font>

## <font style="color:rgb(28, 30, 33);">从Vanilla/Fabric/Forge/NeoForge服务端导出</font>
<font style="color:rgb(28, 30, 33);">按照下图方式将</font>`<font style="color:rgb(28, 30, 33);">world</font>`<font style="color:rgb(28, 30, 33);">文件夹压缩(此处的</font>`<font style="color:rgb(28, 30, 33);">world</font>`<font style="color:rgb(28, 30, 33);">为你的服务器的</font>`<font style="color:rgb(28, 30, 33);">server.properties</font>`<font style="color:rgb(28, 30, 33);">中</font>[level-name设置的值](https://www.yuque.com/simpfox/simpdoc/serverproperties#OJCSX)<font style="color:rgb(28, 30, 33);">)。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026086505-77f7fbe4-f9e8-4054-b221-2860284fa532.png)

<font style="color:rgb(28, 30, 33);">等待任务执行完成后，回到</font><font style="color:rgb(28, 30, 33);">文件</font><font style="color:rgb(28, 30, 33);">页面，在服务器根目录下找到类似</font><font style="color:rgb(28, 30, 33);">compressed20240426165745.zip</font><font style="color:rgb(28, 30, 33);">的压缩文件，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026086798-11670bd3-daac-477e-961c-e4ea64918dbc.png)

<font style="color:rgb(28, 30, 33);">compressed后的数字即代表文件完成压缩时的时间(精确到秒)。</font>

<font style="color:rgb(28, 30, 33);">勾选已创建好的压缩文件，点击右下角三个点，选择</font>`<font style="color:rgb(28, 30, 33);">下载文件</font>`<font style="color:rgb(28, 30, 33);">，简幻欢将尝试让浏览器创建下载任务。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026086428-2dc5c866-a91d-41d9-b278-dec122b75977.png)

:::warning
⚠ **提示**

如果浏览器无法创建下载任务或下载失败，请尝试更换浏览器！

推荐的浏览器：

PC端：[Chrome](https://www.google.cn/chrome/)，[Edge](https://www.microsoft.com/zh-cn/edge/download)，[Supermium](https://win32subsystem.live/supermium/)，[FireFox](https://www.firefox.com.cn/)

安卓端(前往手机应用商店即可下载)：[Edge](https://learn.microsoft.com/zh-cn/deployedge/microsoft-edge-install-mobile-china)，[Chrome](https://www.techspot.com/downloads/5818-google-chrome-for-android.html)

:::



**<font style="color:rgb(28, 30, 33);">如需要导入到客户端，则将解压后的world文件夹移入客户端存档目录即可。</font>**

## <font style="color:rgb(28, 30, 33);">从Bukkit系服务端导出（26.1及更新版本）</font>
同上方“从Vanilla/Fabric/Forge/NeoForge服务端导出”一致。

## <font style="color:rgb(28, 30, 33);">从Bukkit系服务端导出（1.21.11及更早版本）</font>
<font style="color:rgb(28, 30, 33);">Bukkit系服务端(例如：Spigot、Paper、Purpur等服务端)的世界存储如下所示：</font>

| 服务端类型 | 主世界及其他数据 | 下界数据 | 末地数据 |
| --- | --- | --- | --- |
| Vanilla | `/world` | `/world/DIM-1` | `/world/DIM1` |
| Bukkit系服务端 | `/world` | `/world_nether/DIM-1` | `/world_the_end/DIM1` |


### <font style="color:rgb(28, 30, 33);">仅备份，不导入到客户端时</font>
<font style="color:rgb(28, 30, 33);">直接压缩服务器根目录下的</font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);">、</font>`<font style="color:rgb(28, 30, 33);">/world_nether</font>`<font style="color:rgb(28, 30, 33);">、</font>`<font style="color:rgb(28, 30, 33);">/world_the_end</font>`<font style="color:rgb(28, 30, 33);">三个文件夹。</font>

<font style="color:rgb(28, 30, 33);">此处的</font><font style="color:rgb(28, 30, 33);">world</font><font style="color:rgb(28, 30, 33);">为你的服务器的</font><font style="color:rgb(28, 30, 33);">server.properties</font><font style="color:rgb(28, 30, 33);">中</font>[level-name设置的值](https://www.yuque.com/simpfox/simpdoc/serverproperties#OJCSX)<font style="color:rgb(28, 30, 33);">。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026086594-5176fa1f-4c21-4b1a-a331-deb4bb527ca8.png)

<font style="color:rgb(28, 30, 33);">等待任务执行完成后，回到</font>`<font style="color:rgb(28, 30, 33);">文件</font>`<font style="color:rgb(28, 30, 33);">页面，在服务器根目录下找到类似</font>`<font style="color:rgb(28, 30, 33);">compressed20240426165745.zip</font>`<font style="color:rgb(28, 30, 33);">的压缩文件，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026086854-1b1c8b20-7ca7-4683-a6db-e41c6157a7ec.png)

<font style="color:rgb(28, 30, 33);">compressed后的数字即代表文件完成压缩时的时间(精确到秒)。</font>

<font style="color:rgb(28, 30, 33);">勾选已创建好的压缩文件，点击右下角三个点，选择</font>`<font style="color:rgb(28, 30, 33);">下载文件</font>`<font style="color:rgb(28, 30, 33);">，简幻欢将尝试让浏览器创建下载任务。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026087990-264aa7fd-8215-4877-bd98-43d95b6140da.png)

:::warning
⚠ **提示**

如果浏览器无法创建下载任务或下载失败，请尝试更换浏览器！

推荐的浏览器：

PC端：[Chrome](https://www.google.cn/chrome/)，[Edge](https://www.microsoft.com/zh-cn/edge/download)，[Supermium](https://win32subsystem.live/supermium/)，[FireFox](https://www.firefox.com.cn/)

安卓端(前往手机应用商店即可下载)：[Edge](https://learn.microsoft.com/zh-cn/deployedge/microsoft-edge-install-mobile-china)，[Chrome](https://www.techspot.com/downloads/5818-google-chrome-for-android.html)

:::

### <font style="color:rgb(28, 30, 33);">导入到客户端</font>
<font style="color:rgb(28, 30, 33);">按照</font>[上面的方式](#nIdny)<font style="color:rgb(28, 30, 33);">压缩三个文件夹并下载，下载完成后在本地找一个地方进行解压。</font>

+ <font style="color:rgb(28, 30, 33);">将 </font>`<font style="color:rgb(28, 30, 33);">/world_nether/DIM-1</font>`<font style="color:rgb(28, 30, 33);"> 文件夹复制到 </font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);"> 文件夹中。</font>
+ <font style="color:rgb(28, 30, 33);">将 </font>`<font style="color:rgb(28, 30, 33);">/world_the_end/DIM1</font>`<font style="color:rgb(28, 30, 33);"> 文件夹复制到 </font>`<font style="color:rgb(28, 30, 33);">/world</font>`<font style="color:rgb(28, 30, 33);"> 文件夹中。</font>
+ <font style="color:rgb(28, 30, 33);">删除</font>`<font style="color:rgb(28, 30, 33);">/world_nether</font>`<font style="color:rgb(28, 30, 33);"> 和 </font>`<font style="color:rgb(28, 30, 33);">/world_the_end</font>`<font style="color:rgb(28, 30, 33);"> 文件夹。</font>

<font style="color:rgb(28, 30, 33);">最终结果应如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026088246-93842613-64fe-4cd6-8343-49bae2bd889e.png)

<font style="color:rgb(28, 30, 33);">将更改后的world文件夹移入客户端的存档目录即可。</font>

