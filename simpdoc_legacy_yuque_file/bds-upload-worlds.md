:::warning
⚠ 提示

适用服务端：BDS，LLBDS

不适用服务端：Nukkit系，Pocketmine系等

:::

---

## <font style="color:rgb(28, 30, 33);">从客户端导出存档</font>
### <font style="color:rgb(28, 30, 33);">Android导出教程</font>
<font style="color:rgb(28, 30, 33);">由于谷歌对App做出了限制，在BE1.18后，"外部存储"的存储目录被移动至</font>`<font style="color:rgb(28, 30, 33);">Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/</font>`<font style="color:rgb(28, 30, 33);">下。</font>

<font style="color:rgb(28, 30, 33);">如果是您本地创建的存档，其文件夹名称将会是一串无规则</font><font style="color:rgb(28, 30, 33);">英文字符or数字+等号(=)</font><font style="color:rgb(28, 30, 33);">，如下图所示。</font>

<font style="color:rgb(28, 30, 33);">请打开文件夹内的</font>`<font style="color:rgb(28, 30, 33);">levelname.txt</font>`<font style="color:rgb(28, 30, 33);">查看存档名，确保你选择的是需要导出的存档。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116509892-57d17118-e74f-4c3c-85e1-79fa4d455882.png)

<font style="color:rgb(28, 30, 33);">回到</font>`<font style="color:rgb(28, 30, 33);">minecraftWorlds</font>`<font style="color:rgb(28, 30, 33);">文件夹，选择对应的存档文件夹，压缩成zip格式，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/jpeg/32774263/1718116509907-ccd35b60-253b-425b-beb3-03fe7c2eb398.jpeg)

:::warning
⚠ 警告

在Android11及更高的版本中，由于谷歌的限制，您需要将存档文件夹复制到非Android/data的目录下进行压缩！

:::

<font style="color:rgb(28, 30, 33);">或者也可以选择不压缩，使用</font>[SFTP工具](https://www.yuque.com/simpfox/simpdoc/fileoperations#mbio3)<font style="color:rgb(28, 30, 33);">直接上传整个文件夹。</font>

### <font style="color:rgb(28, 30, 33);">Windows导出教程</font>
_<font style="color:rgb(28, 30, 33);">是三个教程里最简单的一个端</font>_

<font style="color:rgb(28, 30, 33);">在游戏内点击</font>`<font style="color:rgb(28, 30, 33);">编辑</font>`

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1742224704150-da1d197d-8d56-407f-8970-a827cf3423f6.png)

<font style="color:rgb(28, 30, 33);">在存档详情页拉到最下方，如下图</font>

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1742224739157-5b12c068-75fb-4c83-b9b1-40aa09364a10.png)

<font style="color:rgb(28, 30, 33);">直接点击“导出世界”并导出即可</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116510691-bc565f19-1cac-4517-a48a-fdae1462a3d1.png)

### <font style="color:rgb(28, 30, 33);">iOS导出教程</font>
<font style="color:rgb(28, 30, 33);">与安卓端导出教程基本相同。打开“文件”，在我的iPhone/iPad里找到</font>`<font style="color:rgb(28, 30, 33);">Minecraft</font>`<font style="color:rgb(28, 30, 33);">，进入以下目录：</font>`<font style="color:rgb(28, 30, 33);">/Minecraft/games/com.mojang/minecraftWorlds</font>`<font style="color:rgb(28, 30, 33);">后根据文件夹内的</font>`<font style="color:rgb(28, 30, 33);">levelname.txt</font>`<font style="color:rgb(28, 30, 33);">寻找需要导出的存档并将整个乱码文件夹压缩为zip即可。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116511942-d1066770-1325-4206-927e-691d94c9d1ba.png)

### <font style="color:rgb(28, 30, 33);">移动端：使用资源包快捷导出</font>
<font style="color:rgb(28, 30, 33);">下载“存档导出mod”的资源包，打开方式选择“Minecraft”来导入。</font>

<font style="color:rgb(28, 30, 33);">这个包在综合交流群10的群文件里存了一份，</font>[或者可以看这里的帖子](https://www.wuye2004.top/archives/3)<font style="color:rgb(28, 30, 33);">（←点击即可快捷到达！）</font>

![](https://cdn.nlark.com/yuque/0/2024/jpeg/32774263/1718116512479-347a8f2e-fb5f-47f7-9791-a257d347348c.jpeg)

<font style="color:rgb(28, 30, 33);">在游戏内全局资源里启用该资源包，或者给你想导出的存档单独装上。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116512612-3b8ed06f-1f04-414d-909d-53b4f9f8a181.png)

<font style="color:rgb(28, 30, 33);">然后你的游戏就像电脑端一样可以直接导出存档了！</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116513653-b69a2352-2186-4c5c-91a3-897498a158f6.png)

## <font style="color:rgb(28, 30, 33);">下载的存档</font>
<font style="color:rgb(28, 30, 33);">你已经有存档了，请直接快进下一步。</font>

## <font style="color:rgb(28, 30, 33);">导入存档到服务器</font>
### <font style="color:rgb(28, 30, 33);">第零步</font>
<font style="color:rgb(28, 30, 33);">在往文件管理里扔存档之前，你应该先检查一下存档文件结构是否正确。</font>

<font style="color:rgb(28, 30, 33);">基岩版存档内有最少7项、最多（我见过的最多）12项文件/文件夹，只有符合这个格式的存档能被游戏识别。如下表（斜体+下划线部分表示非必须）</font>

| 文件或文件夹 | 说明 |
| --- | --- |
| db | 存储存档数据 |
| behavior_packs | 存放行为包 |
| resource_packs | 存放资源包 |
| _texts_ | _<u>特殊文本，在存档切换过语言的情况下出现，存放不同语言下不变的文本</u>_ |
| levelname.txt | 存放存档名 |
| world_icon.jpeg | 存档图标 |
| level.dat | 存放地图数据 |
| level.dat_old | level.dat的备份 |
| _world_behavior_packs.json_ | _<u>记录启用的行为包</u>_ |
| _world_behavior_packs_history.json_ | _<u>记录所有启用过的行为包</u>_ |
| _world_resource_packs.json_ | _<u>记录启用的资源包</u>_ |
| _world_resource_packs_history.json_ | _<u>记录所有启用过的资源包</u>_ |


_<font style="color:rgb(28, 30, 33);">虽然一般不会有错，但是看看为好，以免套了个文件夹。</font>_

### <font style="color:rgb(28, 30, 33);">第一步</font>
<font style="color:rgb(28, 30, 33);">打开SFE4控制台，选择实例，转到文件页面，并转到</font><font style="color:rgb(28, 30, 33);">/worlds/</font><font style="color:rgb(28, 30, 33);">文件夹，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116514396-95b82121-17b1-407f-b70c-ce5f48d46174.png)

### <font style="color:rgb(28, 30, 33);">第二步</font>
<font style="color:rgb(28, 30, 33);">上传存档文件夹（或存档压缩包），如果上传的是压缩包，在上传完毕后解压。  
</font><font style="color:rgb(28, 30, 33);">如果压缩包后缀名为</font>`<font style="color:rgb(28, 30, 33);">.mcworld</font>`<font style="color:rgb(28, 30, 33);">，请将其改为</font>`<font style="color:rgb(28, 30, 33);">.zip</font>`<font style="color:rgb(28, 30, 33);">。</font>

<font style="color:rgb(28, 30, 33);">最终结果应如下图所示：  
</font><font style="color:rgb(28, 30, 33);">例：此处我上传的新存档文件夹名称为</font>`<font style="color:rgb(28, 30, 33);">Fontaine</font>`<font style="color:rgb(28, 30, 33);">。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116515015-4da2b486-1b95-4900-bd0a-b5bfa2379413.png)

### <font style="color:rgb(28, 30, 33);">第三步</font>
<font style="color:rgb(28, 30, 33);">回到服务器根目录，打开</font>`<font style="color:rgb(28, 30, 33);">server.properties</font>`<font style="color:rgb(28, 30, 33);">，找到下面这行配置：</font>

```properties
level-name=Bedrock level
# Allowed values: Any string without semicolon symbol or symbols illegal for file name: /\n\r\t\f`?*\\<>|\":
```

<font style="color:rgb(28, 30, 33);">将其中的</font>`<font style="color:rgb(28, 30, 33);">Bedrock level</font>`<font style="color:rgb(28, 30, 33);">更改为你上传的存档文件夹的名字。  
</font><font style="color:rgb(28, 30, 33);">例：在上一步中我上传的存档文件夹名为Fontaine，那么我就需要把Bedrock level更改为Fontaine，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116514417-cd896fa4-c288-4d72-826e-84bd0a9a1369.png)

### <font style="color:rgb(28, 30, 33);">第四步</font>
<font style="color:rgb(28, 30, 33);">回到终端界面，开启服务器，查看存档是否正确导入。</font>

