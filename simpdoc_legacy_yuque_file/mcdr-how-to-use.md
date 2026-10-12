:::info
本内容转自[在简幻欢上安装和使用MCDR - NorthZero](https://nzdnzd.top/blog/simpfun-mcdr) ，感谢NorthZeroD为简幻欢社区文档带来的教程。

:::

## 介绍
### MCDR 是什么
> MCDReforged (MCDR, 下同) 是一个管理 Minecraft 服务器的工具，拥有自定义插件系统。完全无需修改 Minecraft 服务器本身。
>
> 游戏内计算器，玩家高亮，计分板操作，结构文件管理，备份/回档... 你可以用 MCDR 和其插件控制整个 Minecraft 服务器。
>
> [_点击了解更多_](https://docs.mcdreforged.com/zh-cn/latest/quick_start/introduction.html)
>

## 参考文档
:::tips
ℹ️参考

[快速上手 — MCDReforged 2.15.1 文档](https://docs.mcdreforged.com/zh-cn/latest/quick_start/index.html)

[环境调用方法 - 简幻欢社区文档](https://www.yuque.com/simpfox/simpdoc/customer-aio-how-to-use-mise)

[调用信息对应表 - 简幻欢社区文档](https://www.yuque.com/simpfox/simpdoc/customer-aio-path-list)

:::

## 准备
### 实例选择
1. 选择镜像类型 `基础镜像`
2. 选择实例类别 `自定义-需有开服经验`
3. 选择实例服务端 `AIO`
4. 选择实例版本 `v1`
5. 选择实例规格 `随意`

<details class="lake-collapse"><summary id="u4880b297"><span class="ne-text">💡</span><span class="ne-text">图示</span></summary><p id="u29d4e825" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/60460899/1757310811906-8ae61461-e886-47d7-a03f-cb470f5b74ea.png" width="321" id="u419a0b26" class="ne-image"></p><p id="u38a602f3" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/60460899/1757310822207-1ee7ed14-f0c9-432e-a873-575ce761a687.png" width="325" id="u51c55e6e" class="ne-image"></p><p id="u15c3a4cd" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/60460899/1757310829239-39c783f8-c494-4c33-b738-cb3ec4c26857.png" width="324" id="u941d1ca7" class="ne-image"></p><p id="u5cff0e8b" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/60460899/1757310836326-587b6587-4656-4588-806a-dfe3cfc87c8c.png" width="323" id="u0acb6691" class="ne-image"></p></details>
### 启动脚本
简幻欢使用`/home/container`目录下的`start.sh`脚本作为启动脚本。当你在实例`终端`处按下`▶️启动`按钮时，服务器将执行启动脚本，即`start.sh`中的所有命令。

<details class="lake-collapse"><summary id="u38073063"><span class="ne-text">ℹ️</span><span class="ne-text">图示</span></summary><p id="uff92b6b3" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757199390817-392370fe-4bec-4e0a-a2ae-26ffd01e8edc.webp" width="263" id="ub30a227f" class="ne-image"><span class="ne-text"></span></p></details>
以下是简幻欢初始提供的启动脚本，我们只保留第一行`#!/bin/bash`，删去其余内容(**删去高亮行**)：

```bash
#!/bin/bash

maxmem=$((SERVER_MEMORY - 1000))


echo "使用请看文档 https://www.yuque.com/simpfox/simpdoc/customer-startup-helper"
echo "使用请看文档 https://www.yuque.com/simpfox/simpdoc/customer-startup-helper"
echo "使用请看文档 https://www.yuque.com/simpfox/simpdoc/customer-startup-helper"
sleep 5
```

[_关于Shell命令_](https://www.runoob.com/linux/linux-shell.html)

## 安装MCDR
### 使用 pip 安装
在`start.sh`中写入以下内容：

```bash
#!/bin/bash

mise use -g python@3.13.3

pip3 install mcdreforged
```

然后运行实例。输出：

```plain
mise hint use multiple versions simultaneously with mise use python@3.12 python@3.11
mise ~/.aio/mise/config.toml tools: python@3.13.3
...此处省略若干行...
Installing collected packages: wcwidth, parse, urllib3, typing-extensions, ruamel.yaml.clib, resolvelib, psutil, prompt-toolkit, pathspec, packaging, idna, colorlog, colorama, charset_normalizer, certifi, ruamel.yaml, requests, mcdreforged
Successfully installed certifi-2025.8.3 charset_normalizer-3.4.3 colorama-0.4.6 colorlog-6.9.0 idna-3.10 mcdreforged-2.15.1 packaging-25.0 parse-1.20.2 pathspec-0.12.1 prompt-toolkit-3.0.52 psutil-7.0.0 requests-2.32.5 resolvelib-1.2.0 ruamel.yaml-0.18.15 ruamel.yaml.clib-0.2.12 typing-extensions-4.15.0 urllib3-2.5.0 wcwidth-0.2.13
WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager, possibly rendering your system unusable.It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv. Use the --root-user-action option if you know what you are doing and want to suppress this warning.
...此处省略若干行...
```

:::info
💡我们做了什么？

我们利用`[mise](https://mise.jdx.dev/)`，全局使用了`Python 3.13.3`，然后使用`[pip3](https://www.runoob.com/w3cnote/python-pip-install-usage.html)`命令安装了`mcdreforged`。

:::

<details class="lake-collapse"><summary id="uf9baca46"><span class="ne-text">ℹ️</span><span class="ne-text">关于WARNING</span></summary><p id="u820460c0" class="ne-p"><span class="ne-text">不必理会。如果你想深究，见：</span></p><p id="u05d78729" class="ne-p"><a href="https://stackoverflow.com/questions/68673221/why-do-i-still-get-a-warning-about-running-pip-as-the-root-user-inside-a-doc" data-href="https://stackoverflow.com/questions/68673221/why-do-i-still-get-a-warning-about-running-pip-as-the-root-user-inside-a-doc" target="_blank" class="ne-link"><span class="ne-text">Why do I still get a warning about &quot;Running pip as the 'root' user&quot; inside a Docker container?</span></a></p></details>
### 验证安装
在`start.sh`中，注释掉之前安装所用的命令，增加`mcdreforged`命令：

```bash
#!/bin/bash

# mise use -g python@3.13.3

# pip3 install mcdreforged

mcdreforged
```

:::info
💡技巧

在**vscode**编辑器中，选中代码块，使用`ctrl+/`快捷切换注释。

![](https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757199797815-bf425c82-3d88-42ff-b72f-270cb1d2c250.webp)

:::

然后运行实例。输出：

```plain
MCDReforged 2.15.1 is starting up
MCDReforged is open source, u can find it here: https://github.com/MCDReforged/MCDReforged
[MCDR] [17:24:23] [MainThread/ERROR]: Configuration file 'config.yml' is missing
[MCDR] [17:24:23] [MainThread/INFO]: Looks like MCDR is not initialized at current directory /home/container
[MCDR] [17:24:23] [MainThread/INFO]: Use command "mcdreforged init" to initialize MCDR first
[MCDR] [17:24:23] [MainThread/INFO]: See document https://docs.mcdreforged.com/en/latest/quick_start.html#start-up
```

这证明我们已经成功安装了MCDR。

### 初始化MCDR
在`start.sh`中，为`mcdreforged`命令增加`init`参数：

```plain
#!/bin/bash

# mise use -g python@3.13.3

# pip3 install mcdreforged

mcdreforged init
```

然后运行实例。输出：

```plain
Initialized environment for MCDReforged in /home/container
```

这表明我们已经成功将MCDR初始化到目录`/home/container`，即`start.sh`所在位置。

在实例`文件`管理处，你能看到如下MCDR结构：

```plain
/home/container/
├── config/
├── logs/
├── plugins/
├── server/
├── config.yml
├── permission.yml
└── ...
```

<details class="lake-collapse"><summary id="uaaf2690d"><span class="ne-text">ℹ️</span><span class="ne-text">图示</span></summary><p id="u3e023c8c" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757199917805-9b49f41e-53f1-4f0f-aa27-f39e86bac818.webp" width="145" id="u87be5757" class="ne-image"></p></details>
**做得好！我们已经成功安装并初始化了MCDR****🎉**

## 安装MC服务端
> 要用 MCDR 管理 Minecraft 服务器，你首先需要**准备并配置**好一个 Minecraft 服务端。
>
> 例如，这是典型的原版 Minecraft 服务端目录结构：
>

```plain
./
├── libraries/
├── logs/
├── versions/
├── world/
├── banned-ips.json
├── banned-players.json
├── eula.txt
├── ops.json
├── minecraft_server.jar
├── server.properties
├── usercache.json
└── whitelist.json
```

:::info
💡已准备好服务端了？

直接将服务端**所有文件**上传到MCDR的`server`目录！

别忘了[配置端口](#qPImI)！

然后跳到[配置MCDR](#GSku2)章节。

![](https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200028605-1915d3e6-0bfb-452f-a39b-9fb535c06cc8.webp)

:::

:::tips
ℹ️说明

篇幅有限，仅演示[Leaf](https://www.leafmc.one/download)服务端的部署流程。

这些步骤同样适用于其他[插件服务端](https://nitwikit.8aka.org/Java/start/server-core-choose/plugin)，如[Paper](https://papermc.io/downloads/paper), [Purpur](https://purpurmc.org/download/purpur)。

:::

### 上传核心
挑选你喜欢的服务端，从其官网下载服务端核心：

+ [Leaf](https://www.leafmc.one/download) _**推荐**__(_[_为什么?_](https://www.leafmc.one/zh/docs/benchmark/entity-performance)_)_
+ [Purpur](https://purpurmc.org/download/purpur)
+ [Paper](https://papermc.io/downloads/paper)
+ [Leaves](https://leavesmc.org/downloads/leaves)

[_不知道怎么选？看这里..._](https://nitwikit.8aka.org/Java/start/server-core-choose/plugin)

将下载好的服务端核心上传到MCDR的`server`目录。

<details class="lake-collapse"><summary id="u7fd090b9"><span class="ne-text">💡</span><span class="ne-text">图示</span></summary><p id="u31d311e9" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200065233-47412514-78e0-4932-99ca-7240eaabdd92.webp" width="299" id="u6392d5ba" class="ne-image"><span class="ne-text"></span></p></details>
### 启动命令
在`start.sh`中，将`mcdreforged init`命令注释掉，添加新的命令：

```bash
#!/bin/bash

# mise use -g python@3.13.3

# pip3 install mcdreforged

# mcdreforged init

cd server
${openjdk21} -Xms15G -Xmx15G -jar leaf-1.21.8-101.jar --nogui
```

:::warning
⚠注意

`leaf-1.21.8-101.jar`是笔者所用服务端核心的名称，应当**换成你上传的核心名称**。

`-Xmx`用来指定服务器最**大**内存，其后接内存大小(带单位)。建议设置为你的实例**可用内存大小减1G**。

`-Xms`用来指定服务器最**小**内存，可与`-Xmx`设定的大小相同。

`${openjdk21}`是用来启动服务端的java程序，它被定义在环境变量中。可用值见[调用信息对应表](https://www.yuque.com/simpfox/simpdoc/customer-aio-path-list#ZjNr3)。

有关不同MC版本使用的java版本，见[各Minecraft常见版本所需Java版本及其常见答疑（尽量长期维护）](https://www.bilibili.com/opus/939387567592177669)。

:::

<details class="lake-collapse"><summary id="u109c5e3c"><span class="ne-text">💡</span><span class="ne-text">我们做了什么？</span></summary><p id="u5fb6b838" class="ne-p"><span class="ne-text">当我们启动实例，即运行</span><code class="ne-code"><span class="ne-text">start.sh</span></code><span class="ne-text">时，我们的工作目录在</span><code class="ne-code"><span class="ne-text">/home/container</span></code><span class="ne-text">中，也就是</span><code class="ne-code"><span class="ne-text">start.sh</span></code><span class="ne-text">所处位置。</span></p><p id="u95df6260" class="ne-p"><span class="ne-text">显然，我们的服务端核心文件不在这里，而是在</span><code class="ne-code"><span class="ne-text">/home/container/server</span></code><span class="ne-text">目录中。因此，我们需要使用</span><code class="ne-code"><a href="https://www.runoob.com/linux/linux-comm-cd.html" data-href="https://www.runoob.com/linux/linux-comm-cd.html" target="_blank" class="ne-link"><span class="ne-text">cd</span></a></code><span class="ne-text">命令将工作目录切换到</span><code class="ne-code"><span class="ne-text">server</span></code><span class="ne-text">目录。</span></p><p id="udc8bd425" class="ne-p"><span class="ne-text">接下来，我们调用环境变量</span><code class="ne-code"><span class="ne-text">openjdk21</span></code><span class="ne-text">所指向的</span><code class="ne-code"><span class="ne-text">java</span></code><span class="ne-text">程序，创建</span><a href="https://javaguide.cn/java/jvm/jvm-intro.html" data-href="https://javaguide.cn/java/jvm/jvm-intro.html" target="_blank" class="ne-link"><span class="ne-text">JVM(Java Virtual Machine，Java虚拟机)</span></a><span class="ne-text">，MC服务端程序将在JVM上运行；</span></p><p id="ube68f68e" class="ne-p"><span class="ne-text">参数</span><code class="ne-code"><a href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#extra-options-for-java" data-href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#extra-options-for-java" target="_blank" class="ne-link"><span class="ne-text">-Xms</span></a></code><span class="ne-text">传递给</span><code class="ne-code"><span class="ne-text">JVM</span></code><span class="ne-text">，指定堆内存的最小大小和初始大小为</span><code class="ne-code"><span class="ne-text">15G</span></code><span class="ne-text">；</span></p><p id="udf323c31" class="ne-p"><span class="ne-text">参数</span><code class="ne-code"><a href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#extra-options-for-java" data-href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#extra-options-for-java" target="_blank" class="ne-link"><span class="ne-text">-Xmx</span></a></code><span class="ne-text">传递给</span><code class="ne-code"><span class="ne-text">JVM</span></code><span class="ne-text">，指定堆内存的最大大小为</span><code class="ne-code"><span class="ne-text">15G</span></code><span class="ne-text">；</span></p><p id="u21eac310" class="ne-p"><span class="ne-text">参数</span><code class="ne-code"><a href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#synopsis" data-href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#synopsis" target="_blank" class="ne-link"><span class="ne-text">-jar</span></a></code><span class="ne-text">传递给</span><code class="ne-code"><span class="ne-text">JVM</span></code><span class="ne-text">，指定运行我们的服务端程序</span><code class="ne-code"><span class="ne-text">leaf-1.21.8-101.jar</span></code><span class="ne-text">；</span></p><p id="u8ce3c123" class="ne-p"><span class="ne-text">参数</span><code class="ne-code"><a href="https://zh.minecraft.wiki/w/Tutorial:%E6%9E%B6%E8%AE%BEJava%E7%89%88%E6%9C%8D%E5%8A%A1%E5%99%A8#Minecraft%E9%80%89%E9%A1%B9" data-href="https://zh.minecraft.wiki/w/Tutorial:%E6%9E%B6%E8%AE%BEJava%E7%89%88%E6%9C%8D%E5%8A%A1%E5%99%A8#Minecraft%E9%80%89%E9%A1%B9" target="_blank" class="ne-link"><span class="ne-text">--nogui</span></a></code><span class="ne-text">传递给</span><code class="ne-code"><span class="ne-text">MC服务端</span></code><span class="ne-text">，指定启动服务端时不显示图形界面。</span></p><p id="u47f7cd57" class="ne-p"><code class="ne-code"><span class="ne-text">nogui</span></code><span class="ne-text">与</span><code class="ne-code"><span class="ne-text">--nogui</span></code><span class="ne-text">的作用相同，主要用于向后兼容非常旧的服务器版本，但更加推荐使用</span><code class="ne-code"><span class="ne-text">--nogui</span></code><span class="ne-text">，因为它的格式与其他选项更一致。</span><em><span class="ne-text">—— </span></em><a href="https://zh.minecraft.wiki/w/Tutorial:%E6%9E%B6%E8%AE%BEJava%E7%89%88%E6%9C%8D%E5%8A%A1%E5%99%A8#Minecraft%E9%80%89%E9%A1%B9" data-href="https://zh.minecraft.wiki/w/Tutorial:%E6%9E%B6%E8%AE%BEJava%E7%89%88%E6%9C%8D%E5%8A%A1%E5%99%A8#Minecraft%E9%80%89%E9%A1%B9" target="_blank" class="ne-link"><em><span class="ne-text">Minecraft Wiki</span></em></a></p></details>
然后运行实例，输出：

```plain
Picked up _JAVA_OPTIONS: -Djava.util.prefs.userRoot=/home/container/.aio/.userPrefs -Djava.util.prefs.systemRoot=/home/container/.aio/.systemPrefs
Downloading mojang_1.21.8.jar
Applying patches
Starting org.bukkit.craftbukkit.Main
[21:50:29 INFO]: [bootstrap] Running Java 21 (OpenJDK 64-Bit Server VM 21.0.7+6-LTS; Azul Systems, Inc. Zulu21.42+19-CA) on Linux 6.1.0-21-amd64 (amd64)
[21:50:29 INFO]: [bootstrap] Loading Leaf 1.21.8-101-ver/1.21.8@6933848 (2025-09-06T06:38:44Z) for Minecraft 1.21.8
[21:50:30 INFO]: [LeafConfig] Loading config...
[21:50:30 INFO]: [LeafConfig] Successfully loaded config in 316ms.
[21:50:30 INFO]: [PluginInitializerManager] Initializing plugins...
[21:50:30 INFO]: [PluginInitializerManager] Initialized 0 plugins
[21:50:32 INFO]: [ReobfServer] Remapping server...
[21:50:39 WARN]: Failed to load eula.txt
[21:50:39 INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
[21:50:42 INFO]: [ReobfServer] Done remapping server in 10324ms.
```

看到这两句：

```plain
Failed to load eula.txt
You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
```

这表明我们的服务端安装很成功。

接下来照其所言，你需要同意并签署[Minecraft最终用户许可协议](https://www.minecraft.net/zh-hans/eula)才能运行此服务器。

### 签署EULA
:::warning
⚠提醒

**确保您已认真阅读并充分理解**[**Minecraft最终用户许可协议**](https://www.minecraft.net/zh-hans/eula)。

**签署EULA后，您将负法律责任，且应同时遵守简幻欢的**[**服务协议**](https://www.yuque.com/simpfun/sfe/tos)**。**

:::

在服务端核心目录，即`server`目录中，找到`eula.txt`。

编辑其内容，将`eula`字段的值改为`true`：

```plain
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).
#Sat Sep 06 21:50:39 CST 2025
eula=true
```

### 配置端口
在服务端核心目录，即`server`目录中，找到`server.properties`。

编辑其内容，将`query.port`和`server-port`字段的值改为你的实例端口号：

```plain
#Minecraft server properties
#Sun Sep 07 02:31:21 CST 2025
...此处省略若干行...
query.port=20814
...此处省略若干行...
server-port=20814
...此处省略若干行...
```

<details class="lake-collapse"><summary id="u4d2300a2"><span class="ne-text">💡</span><span class="ne-text">实例端口号是什么？  </span></summary><p id="u38fed3e3" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200314767-5b0e66de-83f0-4547-a973-5b800a84cb8f.webp" width="610" id="u266e0a58" class="ne-image"></p></details>
**好样的！MC服务端已经安装成功****🎉**

## 配置MCDR
> MCDR 的配置文件是 `config.yml`。它位于 MCDR 的工作目录中。
>

本教程中，`config.yml`与`start.sh`在同个目录，即`/home/container`中。

<details class="lake-collapse"><summary id="u3f4af0bf"><span class="ne-text">💡</span><span class="ne-text">图示</span></summary><p id="udc384fd3" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200353897-53460f99-d72f-437e-b732-12b837a2852b.webp" width="179" id="u970f679d" class="ne-image"></p></details>
> 在启动时，MCDR 将尝试加载配置文件，并将缺失的选项(如果有)添加到你的配置文件末尾。如果配置文件不存在，MCDR 则将生成默认配置文件并退出。
>
> 配置文件使用 [YAML](https://cn.linux-terminal.com/?p=4520) 格式。
>
> 当 MCDR 运行时，你可以使用 `!!MCDR reload config` 命令(或其缩写 `!!MCDR r cfg`)来重载配置文件。
>

:::tips
ℹ️说明

本教程仅介绍必要配置。完整配置说明见[配置 — MCDReforged 2.15.1 文档](https://docs.mcdreforged.com/zh-cn/latest/configuration.html)。

:::

### language
> MCDR 用于输出信息的语言。
>
> [_更多..._](https://docs.mcdreforged.com/zh-cn/latest/configuration.html#language)
>

将`language`字段的值更改为`zh_cn`以使用简体中文作为MCDR的输出信息的语言。

```yaml
# The language that MCDR will use to display information
# Examples: "en_us", "zh_cn", "zh_tw"
language: zh_cn
```

### start_command
> 启动服务端的控制台命令。它可以是一个字符串，或一个字符串列表。
>
> [_更多..._](https://docs.mcdreforged.com/zh-cn/latest/configuration.html#start-command)
>

将`start_command`字段的值更改为[启动命令](#启动命令)章节中所使用的命令。

```yaml
# The command to start the server, it can be a string or a list of string
# (shell mode) If it's a string, the command will be executed as a shell command in a shell environment
# (exec mode) If it's a list of strings, the command will be executed directly
# Example command for starting a Minecraft server:
#   'java -Xms1G -Xmx2G -jar minecraft_server.jar nogui'                        (shell mode)
#   ['java', '-Xms1G', '-Xmx2G', '-jar', 'minecraft_server.jar', 'nogui']       (exec mode)
start_command: ${openjdk21} -Xms15G -Xmx15G -jar leaf-1.21.8-101.jar --nogui
```

### handler
> 不同服务端有着截然不同的输出和命令。服务端处理器是用于在各种服务端之间进行处理的模块，也是 MCDR 控制服务端的接入点。
>
> 处理器确定解析服务端标准输出文本的特定方法，并使用正确的命令控制服务端。
>
> [_更多..._](https://docs.mcdreforged.com/zh-cn/latest/configuration.html#handler)
>

将`handler`字段的值更改为符合你服务端种类的处理器。

本教程中，使用[Leaf](https://www.leafmc.one/zh/docs/getting-started)服务端，是Paper下游分支，故使用`bukkit_handler`。

```yaml
# The handler to the specific way to parse the standard output text of the server and the correct command for server control
#   vanilla_handler    , for Vanilla / Carpet / Fabric server
#   beta18_handler     , for Vanilla server in legacy versions, e.g. < 1.7, or even beta1.8
#   bukkit_handler     , for Bukkit / Spigot server with Minecraft version below 1.14, and Paper / Mohist / Folia server in all version
#   bukkit14_handler   , for Bukkit / Spigot server with Minecraft version 1.14 and above
#   forge_handler      , for Forge server
#   cat_server_handler , for CatServer server
#   arclight_handler   , for Arclight server
#   bungeecord_handler , for Bungeecord server
#   waterfall_handler  , for Waterfall server
#   velocity_handler   , for Velocity server
handler: bukkit_handler
```

附：内置的处理器及适用的服务端：

| 处理器 | 兼容的服务端类型 |
| --- | --- |
| vanilla_handler | 用于 原版 / Carpet / Fabric 服务端。只要服务端足够原版就行 |
| beta18_handler | 用于低版本的原版服务端，如 MC < 1.7 的低版本，甚至到 beta1.8 版本。只在 1.6.4 和 beta 1.8.1 版本中进行了测试 |
| bukkit_handler | 用于 1.14 版本以下的 Bukkit / Spigot 服务端，以及所有版本的 Paper / [Mohistmc](https://mohistmc.com/) 服务端 |
| bukkit14_handler | 用于 1.14 或以上版本的 Bukkit / Spigot 服务端 |
| forge_handler | 用于 Forge 服务端 |
| cat_server_handler | 适用于 [CatServer](https://github.com/Luohuayu/CatServer) 服务端 |
| arclight_handler | 适用于 [Arclight](https://github.com/IzzelAliz/Arclight) 服务端 |
| bungeecord_handler | 用于 BungeeCord 服务端。请在启动命令的 `-jar` 参数之前添加 `-Djline.terminal=jline.UnsupportedTerminal` 参数以支持 MCDR。详见 [此处](https://www.spigotmc.org/wiki/start-up-parameters/) |
| waterfall_handler | 用于 WaterFall 服务端 |
| velocity_handler | 用于 Velocity 服务端 |
| basic_handler | 不进行任何分析并返回原始文本的处理器。除非你想使用 MCDR 启动非 Minecraft 相关的服务端，否则无需使用 |


**恭喜！你完成了MCDR的配置****🎉**

## 启动MCDR
### 命令
在`start.sh`中，将之前安装MC服务端的[启动命令](#X5kNf)注释掉，添加新的命令：

```bash
#!/bin/bash

# mise use -g python@3.13.3

# pip3 install mcdreforged

# mcdreforged init

# cd server
# ${openjdk21} -Xms15G -Xmx15G -jar leaf-1.21.8-101.jar --nogui

mcdreforged
```

然后运行实例，输出：

```plain
MCDReforged 2.15.1 is starting up
MCDReforged is open source, u can find it here: https://github.com/MCDReforged/MCDReforged
[MCDR] [02:31:11] [MainThread/INFO]: 语言已设置为 zh_cn
[MCDR] [02:31:11] [MainThread/INFO]: 编码 / 解码方式已设置为 utf8 / utf8
[MCDR] [02:31:11] [MainThread/INFO]: 解析处理器已设置为 bukkit_handler
[MCDR] [02:31:11] [MainThread/INFO]: 插件文件夹列表:
[MCDR] [02:31:11] [MainThread/INFO]: - plugins
[MCDR] [02:31:11] [MainThread/INFO]: MCDReforged 2.15.1 正在启动
[MCDR] [02:31:11] [MainThread/INFO]: MCDReforged 正于 Python 3.13.3 环境中运行
[MCDR] [02:31:11] [TaskExecutor/INFO]: 刷新所有插件中
[MCDR] [02:31:11] [TaskExecutor/INFO]: 没有插件变更; 已加载插件数: 2
[MCDR] [02:31:11] [MainThread/INFO]: 正在启动服务端，启动参数为 '${openjdk21} -Xms15G -Xmx15G -jar leaf-1.21.8-101.jar --nogui'
[MCDR] [02:31:11] [MainThread/INFO]: 服务端正在以 PID 32 运行中
[Server] Picked up _JAVA_OPTIONS: -Djava.util.prefs.userRoot=/home/container/.aio/.userPrefs -Djava.util.prefs.systemRoot=/home/container/.aio/.systemPrefs
[MCDR] [02:31:12] [CheckUpdate/INFO]: MCDR 已为最新版
[Server] Starting org.bukkit.craftbukkit.Main
...此处省略若干行...
[Server] [02:31:30 INFO]: Done preparing level "world" (3.065s)
[Server] [02:31:30 INFO]: Running delayed init tasks
[Server] [02:31:30 INFO]: Done (17.474s)! For help, type "help"
```

看到这一句：

```plain
Done (17.474s)! For help, type "help"
```

这表明你的服务器顺利开起来了！

### 验证MCDR
在MC多人游戏板块，使用`play.simpfun.cn:你的实例端口号`作为地址加入服务器。

<details class="lake-collapse"><summary id="u1c72055c"><span class="ne-text">💡</span><span class="ne-text">图示</span></summary><p id="ufc7de48c" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200492674-6255e809-99d2-4cb5-9b4d-6f3f150b6b13.webp" width="458" id="uae085e40" class="ne-image"></p><p id="u6ffddec0" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200499994-1ce937e0-6f8e-46e0-a833-e0875c5bee91.webp" width="437" id="u353f25a0" class="ne-image"><span class="ne-text"></span></p></details>
进入游戏后，在聊天栏输入命令并回车：

```plain
!!MCDR
```

输出以下内容：

![](../../assets/simpfun/mcdr/11.png)![](https://cdn.nlark.com/yuque/0/2025/webp/32774263/1757200515945-fa6b221d-25a9-4d5a-83d8-b10668116fd0.webp)

**大功告成！你成功部署了基于MCDR的Minecraft服务器！恭喜恭喜！****🎉🎉**

**\(^o^)/**

**欢迎大家的评论和**[**issues**](https://github.com/NorthZeroD/northzerod.github.io/issues)**哦****♥️**

