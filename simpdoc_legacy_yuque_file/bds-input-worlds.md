:::color2
💡 提示

**任何**对服务器文件的操作均建议在服务器**关闭**状态下进行！

:::

## <font style="color:rgb(28, 30, 33);">从服务端导出存档</font>
### <font style="color:rgb(28, 30, 33);">第一步 找到服务器存档</font>
<font style="color:rgb(28, 30, 33);">在文件管理中找到文件夹</font>`<font style="color:rgb(28, 30, 33);">worlds</font>`<font style="color:rgb(28, 30, 33);">后打开，进入目录</font>`<font style="color:rgb(28, 30, 33);">/worlds</font>`<font style="color:rgb(28, 30, 33);">，如下图：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116927604-16a99da1-dede-4e10-88f9-74fc412e4353.png)

<font style="color:rgb(28, 30, 33);">在文件夹内找到你的存档。如果没有更改过地图名称，存档名应为</font><font style="color:rgb(28, 30, 33);">Bedrock Level</font><font style="color:rgb(28, 30, 33);">（见下图）。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116927617-704412ea-2a59-43e7-a0df-ea271871327a.png)

### <font style="color:rgb(28, 30, 33);">第二步 打包并下载存档</font>
<font style="color:rgb(28, 30, 33);">选中存档后点击压缩，格式任意。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116929988-6780369d-d49f-4fa9-a885-a87789a99e44.png)

<font style="color:rgb(28, 30, 33);">使用下载将存档下载到本地。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116930447-5134da8d-cbaa-4955-905d-59a58c4346ed.png)

:::warning
⚠ **提示**

如果浏览器无法创建下载任务或下载失败，请尝试更换浏览器！

推荐的浏览器：

PC端：[Chrome](https://www.google.cn/chrome/)，[Edge](https://www.microsoft.com/zh-cn/edge/download)，[Supermium](https://win32subsystem.live/supermium/)，[FireFox](https://www.firefox.com.cn/)

安卓端(前往手机应用商店即可下载)：[Edge](https://learn.microsoft.com/zh-cn/deployedge/microsoft-edge-install-mobile-china)，[Chrome](https://www.techspot.com/downloads/5818-google-chrome-for-android.html)<font style="color:rgb(28, 30, 33);"></font>

:::

<font style="color:rgb(28, 30, 33);">如果您只是在本地备份存档，那么教程到此为止。</font>

<font style="color:rgb(28, 30, 33);">如果您想把存档导入至客户端，请接着往下看。</font>

## <font style="color:rgb(28, 30, 33);">导入存档到游戏客户端</font>
<font style="color:rgb(28, 30, 33);">向游戏导入存档有两种方法：将存档打包给游戏识别和直接添加到游戏文件。</font>

### <font style="color:rgb(28, 30, 33);">检查存档内文件格式</font>
<font style="color:rgb(28, 30, 33);">打开下载的压缩包，在里面找到以存档名为名的文件夹（真正的存档）。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116930379-8786199d-9f46-4832-937a-ab898ba31d9e.png)

<font style="color:rgb(28, 30, 33);">打开此文件夹，确保目录</font>`<font style="color:rgb(28, 30, 33);">Bedrock Level/</font>`<font style="color:rgb(28, 30, 33);">下格式为——正确的存档格式：</font>

| 文件或文件夹 | 说明 |
| --- | --- |
| db | 存储存档数据 |
| behavior_packs | 存放行为包 |
| resource_packs | 存放资源包 |
| _texts_ | _特殊文本，在存档切换过语言的情况下出现，存放不同语言下不变的文本_ |
| levelname.txt | 存放存档名 |
| world_icon.jpeg | 存档图标 |
| level.dat | 存放地图数据 |
| level.dat_old | level.dat的备份 |
| _world_behavior_packs.json_ | _记录启用的行为包_ |
| _world_behavior_packs_history.json_ | _记录所有启用过的行为包_ |
| _world_resource_packs.json_ | _记录启用的资源包_ |
| _world_resource_packs_history.json_ | _记录所有启用过的资源包_ |


### <font style="color:rgb(28, 30, 33);">方法一 将存档打包给游戏识别</font>
<font style="color:rgb(28, 30, 33);">此方法在</font>**<font style="color:rgb(28, 30, 33);">所有系统</font>**<font style="color:rgb(28, 30, 33);">上都适用，所以截图可能来自于不同系统的终端。</font>

<font style="color:rgb(28, 30, 33);">将备份文件里的存档目录（如</font>`<font style="color:rgb(28, 30, 33);">Bedrock Level</font>`<font style="color:rgb(28, 30, 33);">）解压到任意文件夹，然后压缩为.zip格式的压缩包。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116930435-e3ece1f8-b3fa-48a9-b259-cea3d0b1b611.png)

<font style="color:rgb(28, 30, 33);">将压缩包后缀名</font>**<font style="color:rgb(28, 30, 33);">直接更改</font>**<font style="color:rgb(28, 30, 33);">为</font>`<font style="color:rgb(28, 30, 33);">.mcworld</font>`<font style="color:rgb(28, 30, 33);">，然后打开，打开方式选择</font>`<font style="color:rgb(28, 30, 33);">Minecraft</font>`<font style="color:rgb(28, 30, 33);">。</font>_<font style="color:rgb(28, 30, 33);">（如果弹出“打开为：文档/音乐/视频 等”的窗口，选择文档/其他后选择</font>_`_<font style="color:rgb(28, 30, 33);">Minecraft</font>_`_<font style="color:rgb(28, 30, 33);">）</font>_

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116929972-044bc34e-5833-4975-b07e-f06b48052999.png)

<font style="color:rgb(28, 30, 33);">如果存档格式正确，游戏会自动识别并导入。</font>

### <font style="color:rgb(28, 30, 33);">方法二 直接添加到游戏文件</font>
:::color2
提示

请确保您的游戏开启了“将文件保存到外部存储”，否则以下目录可能不存在！

:::

#### <font style="color:rgb(28, 30, 33);">iOS/iPadOS</font>
<font style="color:rgb(28, 30, 33);">在“文件”App中打开以下目录：</font>`<font style="color:rgb(28, 30, 33);">(我的iPhone/iPad)/Minecraft/games/com.mojang/minecraftWorlds</font>`

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116931293-5499ca70-fdbc-4928-a44b-7736fcae27d9.png)

<font style="color:rgb(28, 30, 33);">将</font>上一步<font style="color:rgb(28, 30, 33);">中的文件夹Bedrock Level直接复制到此文件夹内，打开游戏即可发现存档已经导入。</font>

#### <font style="color:rgb(28, 30, 33);">Android</font>
<font style="color:rgb(28, 30, 33);">在文件管理(推荐使用第三方文件管理器，例如ES，MT等)内打开以下目录：</font>`<font style="color:rgb(28, 30, 33);">Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/</font>`

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116931678-31bb03d3-7753-4bec-9a9f-6cd62296b3f9.png)

<font style="color:rgb(28, 30, 33);">将</font>[上一步](https://simpdoc.top/docs/mcbe/input-worlds#%E7%AC%AC%E4%B8%89%E6%AD%A5-%E6%A3%80%E6%9F%A5%E5%AD%98%E6%A1%A3%E5%86%85%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F)<font style="color:rgb(28, 30, 33);">中的文件夹</font><font style="color:rgb(28, 30, 33);">Bedrock Level</font><font style="color:rgb(28, 30, 33);">直接复制到此文件夹内，打开游戏即可发现存档已经导入。</font>

#### <font style="color:rgb(28, 30, 33);">Windows 10/11（BE1.21.120前）</font>
<font style="color:rgb(28, 30, 33);">在文件资源管理器种打开以下目录</font>`<font style="color:rgb(28, 30, 33);">C:\Users\（这里是你电脑的用户名）\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds</font>`

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718116931965-8d13f208-5d9d-4f90-9215-9f467ec68f03.png)

<font style="color:rgb(28, 30, 33);">将</font>上一步<font style="color:rgb(28, 30, 33);">中的文件夹</font>`<font style="color:rgb(28, 30, 33);">Bedrock Level</font>`<font style="color:rgb(28, 30, 33);">直接复制到此文件夹内，打开游戏即可发现存档已经导入。</font>

#### <font style="color:rgb(28, 30, 33);">Windows 10/11（BE1.21.120后）</font>
Win+R打开运行，输入下方内容后回车打开文件夹：

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1762503244910-37c170a5-3ba0-43f5-9896-e389084dbc1d.png)

```plain
%appdata%\Minecraft Bedrock
```

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1762503252257-d35f907f-14b8-43ac-85e8-3d6c480e2a12.png)

然后打开`Users\<一串数字>\games\com.mojang\minecraftWorlds\`这个文件夹：

> （关于一串数字：目前不知道这串数字对应的是什么，但总之是跟微软账户相关的，登录过多个账户需要注意）
>

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1762503400820-12aa32f7-f0f2-4a16-a307-49c200212b55.png)

<font style="color:rgb(28, 30, 33);">将</font>上一步<font style="color:rgb(28, 30, 33);">中的文件夹</font>`<font style="color:rgb(28, 30, 33);">Bedrock Level</font>`<font style="color:rgb(28, 30, 33);">直接复制到此文件夹内，打开游戏即可发现存档已经导入。</font>

