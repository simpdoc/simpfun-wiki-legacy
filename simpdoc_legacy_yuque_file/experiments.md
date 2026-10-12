:::warning
⚠ 提示

本文档适用于官方文件结构的基岩版存档，即BDS和所有mc客户端一定可用。

本文档目前只含Windows系统的操作教程。

:::

---

简幻欢的官方基岩版服务器镜像，如果创建实例后没有更改任何设置，启动时使用的游戏设置默认**关闭**所有实验性游戏内容。同时，玩家（即使拥有op权限）也**无法**在游戏内更改**实验性游戏内容**设置（如下图所示），且SFE4的网页中也**没有**能够直接更改该内容的方法。



![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752754318250-48ea8b12-d104-4ac4-a784-bb8682c234f0.png)



## 怎么办呢？
### 本地创建存档并导入服务器
基岩版客户端创建存档时，**可以**自行更改世界设置。



![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752755217462-ae2fed87-b460-4c3d-84fd-1844e5fe2dd7.png)

如果您不需要保留服务器上的存档数据，可以在本地按照自己的需要创建存档后，上传至简幻欢服务器（详见[【MCBE】导入存档到服务端](https://www.yuque.com/simpfox/simpdoc/bds-upload-worlds)）。



如果您需要使用服务器上的存档并更改实验性游戏内容设置，请看下一步。



### 更改已有存档中的实验性游戏内容


<font style="color:rgb(47, 50, 56);">根据</font>[Wiki](https://zh.minecraft.wiki/w/%E5%AE%9E%E9%AA%8C%E6%80%A7%E7%8E%A9%E6%B3%95?variant=zh-cn)<font style="color:rgb(47, 50, 56);">，世界的实验性设置以</font><u><font style="color:rgb(47, 50, 56);">NBT格式</font></u><font style="color:rgb(47, 50, 56);">储存在</font><u><font style="color:rgb(47, 50, 56);">level.dat</font></u><font style="color:rgb(47, 50, 56);">文件内。因此，修改该文件内的NBT数据，可以更改实验性游戏内容设置。</font>

<font style="color:rgb(47, 50, 56);"></font>

#### <font style="color:rgb(47, 50, 56);">第一步：从SFE4中下载level.dat文件</font>


打开文件管理面板，找到worlds文件夹并打开。如果您没有更改存档名称，则存档文件夹默认为Bedrock Level；如果更改，则为您自行设定的名称。

进入存档文件夹，找到level.dat文件并选中，点击右下角三个点，点击下载，将level.dat文件下载到您的电脑上。

不要关闭网页，下面还有用。



#### 第二步：使用NBT修改工具修改文件


[NBTExplorer](https://github.com/jaquadro/NBTExplorer)的上次更新已经是2017年了，它不太能够正常打开高版本基岩版服务器的文件。

在本文档中，将使用较新的工具[nbt-studio](https://github.com/tryashtar/nbt-studio)来对level.dat进行修改。

~~虽然这个东西也是22年的了，不过比explorer更能用~~

:::info
<font style="color:rgb(28, 30, 33);">下载链接：</font>

<font style="color:rgb(28, 30, 33);">· GitHub原地址：</font>[Releases · tryashtar/nbt-studio](https://github.com/tryashtar/nbt-studio/releases)

因为该项目并未在GitHub页面里提供LICENSE文件，所以我们并不能保证未经作者本人同意的再分发是合法的，因此，此文档仅提供原GitHub链接。

不过，如果你实在访问不了GitHub，可以去找电脑里有该exe的群友私信索要，这种情况下没有太大的法律风险。

顺带一提，微软商店里有一个原价104￥，打折71￥的[NBT Studio](https://apps.microsoft.com/detail/9mtdh6mqddzr?hl=zh-CN&gl=CN)，不过该版本与GitHub版本的作者名字不一样，此文档也并不提供它的使用教程~~因为没钱买~~。

:::

打开NBT-Studio，点击左上角File，选择Open File。

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752756736302-d9d4e834-d05d-4c83-90a0-a8b4994f2d1c.png)

选择自己的level.dat文件，点击打开。

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752756808144-9cd9b3e1-e237-418a-9b8a-73e61f0aba25.png)

在NBT-Studio中，找到大类experiments，双击打开。

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752756971376-db679279-37bf-4611-b391-88084a90729a.png)

观察到，experiments下存储着以每项实验性玩法对应的命名空间ID为名的Byte Tag，Tag的值决定了该玩法是否启用。

_如果你听不懂这句话里的“命名空间”“Byte Tag”“值”这些名词，没有任何影响，按照下面的步骤照做就行_

（若您已启用的实验性玩法较少，则**不会**看到过多Byte Tag。这是因为，大部分设置因为默认不启用，若未更改则不用特别标出，沿用游戏内部默认设置即可。）

如果要启用过去没有启用过的设置，则需要新建Byte Tag。

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752757484672-5c4c9c5b-8afe-4f81-aea9-860fe9452994.png)

如上图所示，_点击直接跳转→_[Wiki](https://zh.minecraft.wiki/w/%E5%AE%9E%E9%AA%8C%E6%80%A7%E7%8E%A9%E6%B3%95?variant=zh-cn)<font style="color:rgb(47, 50, 56);">记录了所有的实验性玩法和对应命名空间ID。对照Wiki，找到自己需要打开的设置，复制其命名空间ID，回到NBT-Studio。</font>

<font style="color:rgb(47, 50, 56);">以“定位栏”（命名空间ID：</font><font style="color:rgb(16, 20, 24);background-color:rgb(248, 249, 250);">locator_bar）为例：</font>

<font style="color:rgb(16, 20, 24);background-color:rgb(248, 249, 250);">选中experiments（标蓝），在上方菜单中找到按钮“Add Byte Tag”</font>_<font style="color:rgb(16, 20, 24);background-color:rgb(248, 249, 250);">（该按钮为红色，在一堆带字母的按钮中排最前面）</font>_<font style="color:rgb(16, 20, 24);background-color:rgb(248, 249, 250);">，点击。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752758038431-fc7faeb0-8014-4bf0-a8e3-0d44ed645981.png)

在弹出的窗口中，Name栏填入复制到的命名空间ID，我这里是locator_bar；Value栏填入“1”（即启用）.

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752758200484-f2a9b72d-e6f5-48f0-9949-491a11767f55.png)

点击OK按钮保存。

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752758227132-fe171ff5-5767-42ea-b4e3-42891db8f13b.png)

此时，NBT Studio中已有我们想要添加的设置，如果需要启用更多设置，重复以上步骤。

当设置添加完毕后，点击左上角File，保存更改后的level.dat文件。

![](https://cdn.nlark.com/yuque/0/2025/png/57139506/1752758321608-6d8bb068-aa5d-412b-9246-3ae302b0cc6f.png)

如果选择“Save”，则NBT Studio会覆盖原文件；如果选择“Save As”，则会在其他自选目录保存修改后的文件。



#### 第三步：将修改后的level.dat文件传回服务器


找到新的文件，回到第一步中留下的网页，选择修改后的文件并上传，也可直接拖拽至网页后点击上传。



开启服务器，即可发现世界设置已成功更改。

