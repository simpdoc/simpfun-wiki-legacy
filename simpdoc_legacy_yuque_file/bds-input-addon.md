## <font style="color:rgb(28, 30, 33);">前言</font>
:::danger
🔥 ** 危险警告**

+ BDS在添加Addon后会造成性能下降（尤其是修改生物类模组），严重时可能会崩服。
+ **BDS无法完美兼容所有Addon**（例：一个Addon在本地客户端上正常运行，当其装载之服务端后就无法运行）。
+ 在安装Addon之前强烈建议先**备份一次整个服务端**，以免安装Addon后服务端出现不可逆错误进而损坏存档！
+ **Nukkit系服务端无法安装Addon！**

:::

:::warning
⚠ **提示**

+ 基岩版修改或新加内容的手段叫做 **Addon(附加包) **，请不要与Java版的 **mod(模组)** 混淆！
+ 在提问时请正确的将基岩版的修改或新加内容的手段称作**Addon**或**附加包**，以便解答者快速判别你所使用的版本！

:::

## <font style="color:rgb(28, 30, 33);">准备工作</font>
### <font style="color:rgb(28, 30, 33);">什么是Addon？</font>
**<font style="color:rgb(28, 30, 33);">附加包（Add-on）</font>**<font style="color:rgb(28, 30, 33);"> </font><font style="color:rgb(28, 30, 33);">是基岩版加入新内容或修改原有内容的一种手段，受Mojang官方支持。附加包允许玩家更改世界的纹理样貌、实体的模型、行为规则等，是实现Minecraft全版本自定义（即数据驱动）的坚实一步。通常包含资源包与行为包两部分。  
</font>**<font style="color:rgb(28, 30, 33);">资源包（ResourcePacks）</font>**<font style="color:rgb(28, 30, 33);">：资源包是一组图像、模型、声音和其他资源文件，用于修改游戏的外观和声音效果。  
</font>**<font style="color:rgb(28, 30, 33);">行为包（BehaviorPacks）</font>**<font style="color:rgb(28, 30, 33);">：行为包是一组数据文件，用于定义实体（生物、物品、方块等）的行为和交互规则。</font>

### <font style="color:rgb(28, 30, 33);">检查文件格式（很重要）</font>
<font style="color:rgb(28, 30, 33);">想要使用以下的方式安装，首先要保证文件后缀统一，如果你的资源文件为.zip或者.rar，请务必再导入前修改为</font>`<font style="color:rgb(28, 30, 33);">.mcpack</font>`<font style="color:rgb(28, 30, 33);">（材质纹理音效）或者</font>`<font style="color:rgb(28, 30, 33);">.mcaddon</font>`<font style="color:rgb(28, 30, 33);">（Addon/附加包）格式。</font>

+ `<font style="color:rgb(28, 30, 33);">.mcpack</font>`<font style="color:rgb(28, 30, 33);">：是最早引入MCBE的文件格式，仅仅表示单个资源包或单个行为包，该文件包直接包含资源包或行为包的内容文件。</font>
+ `<font style="color:rgb(28, 30, 33);">.mcaddon</font>`<font style="color:rgb(28, 30, 33);">：随版本发展，该文件格式被引入后，批量安装Add-on的操作变得容易，一个</font>`<font style="color:rgb(28, 30, 33);">.mcaddon</font>`<font style="color:rgb(28, 30, 33);">文件可包含多个子文件夹（资源包或行为包的内容文件夹，或者是mcpack包），在安装时，由游戏自动识别每个子文件夹的类型（子附加包类型），从而可以一次性安装多个行为包或资源包。  
</font><font style="color:rgb(28, 30, 33);">两种文件格式的区别如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718117789829-ffdf59a7-ebee-4fd0-96b0-a1f49e8e74fc.png)

## <font style="color:rgb(28, 30, 33);">方法一：替换世界文件夹</font>
:::warning
⚠ **提示**

适用服务端：BDS，LLBDS，Endstone  
不适用服务端：所有Nukkit系服务端

:::

:::danger
🔥 **警告**

这种方法只适合在新存档安装Addon，已有的存档无法通过此方法安装！

:::

#### <font style="color:rgb(28, 30, 33);">第一步</font>
<font style="color:rgb(28, 30, 33);">将你需要安装的addon先导入本地客户端，并创建一个新世界安装addon。  
</font><font style="color:rgb(28, 30, 33);">各个系统导入与安装方法请自行搜索教程。</font>

#### <font style="color:rgb(28, 30, 33);">第二步</font>
<font style="color:rgb(28, 30, 33);">将整个存档</font>**<font style="color:rgb(28, 30, 33);">文件夹</font>**<font style="color:rgb(28, 30, 33);">导出并上传至服务器的</font><font style="color:rgb(28, 30, 33);">worlds</font><font style="color:rgb(28, 30, 33);">文件夹，并</font>**<font style="color:rgb(28, 30, 33);">记下存档文件夹的名称</font>**<font style="color:rgb(28, 30, 33);">(</font>**<font style="color:rgb(28, 30, 33);">尽量使用英文</font>**<font style="color:rgb(28, 30, 33);">)。</font>

[从客户端导出存档并上传至服务器的方法点这里。](https://www.yuque.com/simpfox/simpdoc/bds-upload-worlds)

<font style="color:rgb(28, 30, 33);">例：此处我上传的新存档文件夹名称为</font>`<font style="color:rgb(28, 30, 33);">Fontaine</font>`<font style="color:rgb(28, 30, 33);">。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718117790514-ab61aafd-ab89-412b-a8d5-651db0fe5988.png)<font style="color:rgb(28, 30, 33);">  
</font>~~<font style="color:rgb(28, 30, 33);">(请忽略这是个Windows窗口的事实，你把它想象成简幻欢的控制台就行了)</font>~~

#### <font style="color:rgb(28, 30, 33);">第三步</font>
<font style="color:rgb(28, 30, 33);">回到服务器根目录，打开</font><font style="color:rgb(28, 30, 33);">server.properties</font><font style="color:rgb(28, 30, 33);">，找到下面这行配置：</font>

```properties
level-name=Bedrock level
# Allowed values: Any string without semicolon symbol or symbols illegal for file name: /\n\r\t\f`?*\\<>|\":
```

<font style="color:rgb(28, 30, 33);">将其中的</font>`<font style="color:rgb(28, 30, 33);">Bedrock level</font>`<font style="color:rgb(28, 30, 33);">更改为你上传的存档文件夹的名字。  
</font><font style="color:rgb(28, 30, 33);">例：在上一步中我上传的存档文件夹名为</font>`<font style="color:rgb(28, 30, 33);">Fontaine</font>`<font style="color:rgb(28, 30, 33);">，那么我就需要把</font>`<font style="color:rgb(28, 30, 33);">Bedrock level</font>`<font style="color:rgb(28, 30, 33);">更改为</font>`<font style="color:rgb(28, 30, 33);">Fontaine</font>`<font style="color:rgb(28, 30, 33);">，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718117787337-774fe4da-f56e-4a9f-b015-ca3d350ce4b3.png)

#### <font style="color:rgb(28, 30, 33);">第四步</font>
<font style="color:rgb(28, 30, 33);">回到终端界面，重新开服，并检查世界是否正常加载。</font>

## <font style="color:rgb(28, 30, 33);">方法二：手动导入</font>
:::warning
⚠ **提示**

适用服务端：BDS，LLBDS，Endstone  
不适用服务端：所有Nukkit系服务端

挺麻烦的，如果你是新建的服务器/世界为啥不试试第一种方法？

:::

#### <font style="color:rgb(28, 30, 33);">第一步</font>
<font style="color:rgb(28, 30, 33);">准备好你需要安装的Addon，并将Addon的行为包与资源包分离出来。 </font>

<font style="color:rgb(28, 30, 33);">关闭服务器。</font>

#### <font style="color:rgb(28, 30, 33);">第二步</font>
<font style="color:rgb(28, 30, 33);">在简幻欢控制台的文件页面，转到</font>`<font style="color:rgb(28, 30, 33);">/worlds/<你的存档名字>/</font>`<font style="color:rgb(28, 30, 33);">，</font>**<font style="color:rgb(28, 30, 33);">先检查当前存档根目录下是否有</font>**`**<font style="color:rgb(28, 30, 33);">world_behavior_packs.json</font>**`**<font style="color:rgb(28, 30, 33);">文件和</font>**`**<font style="color:rgb(28, 30, 33);">world_resource_packs.json</font>**`**<font style="color:rgb(28, 30, 33);">文件(如果没有的话请自行创建)</font>**<font style="color:rgb(28, 30, 33);">，然后再找到</font>`<font style="color:rgb(28, 30, 33);">behavior_packs</font>`<font style="color:rgb(28, 30, 33);">和</font>`<font style="color:rgb(28, 30, 33);">resource_packs</font>`<font style="color:rgb(28, 30, 33);">这俩文件夹。</font>

#### <font style="color:rgb(28, 30, 33);">第三步</font>
<font style="color:rgb(28, 30, 33);">将addon的行为包放入</font>`<font style="color:rgb(28, 30, 33);">behavior_packs</font>`<font style="color:rgb(28, 30, 33);">文件夹，将addon的资源包放入</font>`<font style="color:rgb(28, 30, 33);">resource_packs</font>`<font style="color:rgb(28, 30, 33);">文件夹。</font>

<font style="color:rgb(28, 30, 33);">将行为包的uuid与版本号写入</font>`<font style="color:rgb(28, 30, 33);">world_behavior_packs.json</font>`<font style="color:rgb(28, 30, 33);">文件，再将资源包的uuid与版本号写入</font>`<font style="color:rgb(28, 30, 33);">world_resource_packs.json</font>`<font style="color:rgb(28, 30, 33);">文件。</font>

<font style="color:rgb(28, 30, 33);">格式如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718117790246-2b8af3f7-a31b-4523-9427-b395a8594eec.png)

```json
// 复制时请去除所有注释
// json格式不允许存在注释
[

	{
		"pack_id" : "d62580fb-d5cf-4170-a391-024573101dfd", //替换成资源包/行为包的uuid
		"version" : [ 1, 0, 0 ]  //替换成资源包/行为包的版本号
	}, 
	{
		"pack_id" : "12345678-0000-9876-abcd-abcdef123456",
		"version" : [ 1, 1, 4 ]
	}
]
```

:::info
ℹ **uuid与版本号在哪里？**

在资源包/行为包的`manifest.json`内，如下图所示，红框内为uuid，绿框内为版本号：

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718117789858-a0782f13-b00c-48ce-9a73-282fed372d8a.png)

:::

#### <font style="color:rgb(28, 30, 33);">第四步</font>
<font style="color:rgb(28, 30, 33);">回到终端界面，重新开服，并检查addon是否正常加载。</font>

## <font style="color:rgb(28, 30, 33);">方法三：AddonHelper导入</font>
:::danger
⛔ **过期的内容**

此部分内容已过期，仅在BE1.20.30及以下的LL2服务端可用！

:::

:::warning
⚠<font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">提示</font>**

<font style="color:rgb(28, 30, 33);">适用服务端：LiteLoaderBDS(LL2)  
</font><font style="color:rgb(28, 30, 33);">不适用服务端：原版BDS，LeviLamina(LL3)，所有Nukkit系服务端  </font>

:::

:::danger
🔥<font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">警告</font>**

<font style="color:rgb(28, 30, 33);">这种方法无法导入文件过大的addon！如果你需要导入比较大的addon，请考虑使用第二/三种方式！</font>

:::

<font style="color:rgb(28, 30, 33);">当你使用的服务端为LiteLoaderBDS时，可以通过LiteLoader官方提供的</font>`<font style="color:rgb(28, 30, 33);">Addon安装器</font>`<font style="color:rgb(28, 30, 33);">直接安装（这个东西是直接内嵌在LiteLoaderBDS内的，无需额外下载）。  </font>

#### <font style="color:rgb(28, 30, 33);">第一步</font>
<font style="color:rgb(28, 30, 33);">准备好你需要安装的Addon。</font><font style="color:rgb(28, 30, 33);">  
</font><font style="color:rgb(28, 30, 33);">关闭服务器。  </font>

#### <font style="color:rgb(28, 30, 33);">第二步</font>
<font style="color:rgb(28, 30, 33);">在简幻欢控制台的</font>`<font style="color:rgb(28, 30, 33);">文件</font>`<font style="color:rgb(28, 30, 33);">页面，转到</font>`<font style="color:rgb(28, 30, 33);">/plugins/AddonsHelper</font>`<font style="color:rgb(28, 30, 33);">文件夹。   </font>

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1720163540706-60422b18-32f6-4e7d-9915-c8ab46b70c78.png)<font style="color:rgb(28, 30, 33);"></font>

#### <font style="color:rgb(28, 30, 33);">第三步</font>
<font style="color:rgb(28, 30, 33);">将你需要安装的Addon上传至这个文件夹中。    </font>

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1720163576064-b7fdc3d4-1cf4-4e00-b93e-94629ce7d073.png)

:::warning
⚠<font style="color:rgb(28, 30, 33);"> 提示</font>

<font style="color:rgb(28, 30, 33);">请注意文件格式是否正确！  </font>

:::

#### <font style="color:rgb(28, 30, 33);">第四步</font>
<font style="color:rgb(28, 30, 33);">回到终端界面，重新开服，并查看终端窗口中是否出现类似下图红框内的输出，如果出现了，则证明导入成功。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1720163633361-675e542b-856f-43d4-9dec-4990a3294c3c.png)<font style="color:rgb(28, 30, 33);">  
</font><font style="color:rgb(28, 30, 33);">(使用Windows窗口进行演示)  </font>

:::success
💡<font style="color:rgb(28, 30, 33);"> 提示</font>

<font style="color:rgb(28, 30, 33);">使用这种方式导入Addon时，控制台会在加载世界完成后出现一大串红色的</font>`<font style="color:rgb(28, 30, 33);">ERROR</font>`<font style="color:rgb(28, 30, 33);">，但这是正常现象（服务器检测到原本的世界没有这些东西而出现ERROR），绝大部分情况下不影响使用。  </font>

:::

