## <font style="color:rgb(28, 30, 33);">前言</font>
### <font style="color:rgb(28, 30, 33);">关于LiteloaderBDS/LevLamina</font>
:::info
<font style="color:rgb(28, 30, 33);">ℹ</font><font style="color:rgb(28, 30, 33);"> 提示</font>

<font style="color:rgb(28, 30, 33);">在下文中，LiteloaderBDS将被简称为</font>`<font style="color:rgb(28, 30, 33);">LL2</font>`<font style="color:rgb(28, 30, 33);">，LevLamina将被简称为</font>`<font style="color:rgb(28, 30, 33);">LL3</font>`<font style="color:rgb(28, 30, 33);">。</font>

:::

+ <font style="color:rgb(28, 30, 33);">LL2与LL3不兼容，所有为LL2适配的插件无法</font>**<font style="color:rgb(28, 30, 33);">直接</font>**<font style="color:rgb(28, 30, 33);">安装在LL3服务端上。</font>
+ <font style="color:rgb(28, 30, 33);">LL3无法安装LL2的</font>`<font style="color:rgb(28, 30, 33);">.dll</font>`<font style="color:rgb(28, 30, 33);">格式的插件。</font>
+ <font style="color:rgb(28, 30, 33);">LL3想安装LLSE的插件(包含</font>`<font style="color:rgb(28, 30, 33);">.lua</font>`<font style="color:rgb(28, 30, 33);">，</font>`<font style="color:rgb(28, 30, 33);">.js</font>`<font style="color:rgb(28, 30, 33);">，</font>`<font style="color:rgb(28, 30, 33);">.py</font>`<font style="color:rgb(28, 30, 33);">等格式的插件)需要先安装</font>[Legacy转译层](https://github.com/LiteLDev/LegacyScriptEngine)<font style="color:rgb(28, 30, 33);">，根据LSE插件编写语言的不同，转译层也分为好几种。</font>

### <font style="color:rgb(28, 30, 33);">关于Nukkit系服务端</font>
+ <font style="color:rgb(28, 30, 33);">Nukkit系由于各种分支层出不穷，因此在安装插件前请确认插件是否兼容此服务端。</font>

## <font style="color:rgb(28, 30, 33);">如何安装</font>
:::warning
⚠ **不适用**

此教程不适用于以下服务端：

+ BDS
+ BDS on Windows

:::

### LL3
1. <font style="color:rgb(28, 30, 33);">进入实例，点击</font>`<font style="color:rgb(28, 30, 33);">文件</font>`<font style="color:rgb(28, 30, 33);">；</font>
2. <font style="color:rgb(28, 30, 33);">进入</font>`<font style="color:rgb(28, 30, 33);">plugins</font>`<font style="color:rgb(28, 30, 33);">文件夹；</font>
3. <font style="color:rgb(28, 30, 33);">如果插件打包为了支持LL3的格式（如下图，压缩包内</font>**<font style="color:rgb(28, 30, 33);">有一个文件夹</font>**<font style="color:rgb(28, 30, 33);">，</font>**<font style="color:rgb(28, 30, 33);">文件夹内有插件本体和</font>**`**<font style="color:rgb(28, 30, 33);">manifest.json</font>**`<font style="color:rgb(28, 30, 33);">），则直接将压缩包上传至</font>`<font style="color:rgb(28, 30, 33);">plugins</font>`<font style="color:rgb(28, 30, 33);">文件夹后直接解压缩，启动服务器后插件即可加载。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1720164101301-b603e583-181c-457e-b178-d073bf4b8464.png)

4. 如果插件没有打包为支持LL3的格式，则需要将插件本体直接放入`plugins`文件夹，然后启动服务器，LL3会自动为插件创建**以插件文件名命名的**`**文件夹**`**与**`**<font style="color:rgb(28, 30, 33);">manifest.json</font>**`<font style="color:rgb(28, 30, 33);">，并把插件移入新的文件夹。然后你需要</font>**<font style="color:rgb(28, 30, 33);">关闭服务器后再打开</font>**<font style="color:rgb(28, 30, 33);">，插件才能正常加载。</font>

### Endstone
1. <font style="color:rgb(28, 30, 33);">进入实例，点击</font>`<font style="color:rgb(28, 30, 33);">文件</font>`<font style="color:rgb(28, 30, 33);">；</font>
2. <font style="color:rgb(28, 30, 33);">进入</font>`<font style="color:rgb(28, 30, 33);">plugins</font>`<font style="color:rgb(28, 30, 33);">文件夹；</font>
3. <font style="color:rgb(28, 30, 33);">如果你需要安装的插件为一个单独的</font>`<font style="color:rgb(28, 30, 33);">.whl</font>`<font style="color:rgb(28, 30, 33);">/</font>`<font style="color:rgb(28, 30, 33);">.dll</font>`<font style="color:rgb(28, 30, 33);">文件，则直接将此文件上传到</font>`<font style="color:rgb(28, 30, 33);">plugins</font>`<font style="color:rgb(28, 30, 33);">文件夹内。</font>
4. <font style="color:rgb(28, 30, 33);">如果你需要安装的插件为一个类似下图所示的压缩包，压缩包里有插件本体和配置文件夹，那么你需要将这个压缩包上传到</font>`<font style="color:rgb(28, 30, 33);">plugins</font>`<font style="color:rgb(28, 30, 33);">文件夹并解压缩。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1744428431186-ea88f6ef-e461-49f7-a926-34738ebf0399.png)



### LL2/Nukkit系
1. <font style="color:rgb(28, 30, 33);">进入实例，点击</font>`<font style="color:rgb(28, 30, 33);">文件</font>`<font style="color:rgb(28, 30, 33);">；</font>
2. <font style="color:rgb(28, 30, 33);">进入</font>`<font style="color:rgb(28, 30, 33);">plugins</font>`<font style="color:rgb(28, 30, 33);">文件夹；</font>
3. <font style="color:rgb(28, 30, 33);">上传您的插件。</font>

## 注意事项
:::danger
+ 注意检查插件版本，前置等。
+ 不要把LL2/LL3插件安装在Nukkit系服务端上，反之亦然！
+ LL3在安装LLSE插件前确保已经安装了对应的转译层。
+ LL3的插件文件夹需要与插件本体名称一致，否则此插件将不会加载！
+ LL2在安装插件时注意插件版本，不要安装成了LL3插件！

:::

