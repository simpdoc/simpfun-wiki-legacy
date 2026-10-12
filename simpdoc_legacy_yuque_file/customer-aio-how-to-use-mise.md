不管是什么方法，请阅读后查看【调用信息对应表】后才可使用

[调用信息对应表](https://www.yuque.com/simpfox/simpdoc/vhdndd5g0vmvswes)

# Mise 变量调用（可对 全局 / 仅单文件夹 生效） 
:::danger
使用本方法需要环境标注 `基于 Mise 部署`

:::

> 使用 Mise 时，您可以不强制指定具体版本
>
> 如 Python 3.9.22  
您既可以采用 python@3.9.22 作为包名  
也可以采用 python@3.9 一键指定我们给您提供的版本
>

以 `Java` 为例，如果您需要使用`java`环境变量（如 java --version），您可以根据下述提示进行操作

:::warning
请对应《调用信息对应表》的 `Mise 包名`

:::

## 全局调用一个版本的 Mise 包
mise use -g {mise包名}

> Mise 包名详见 [调用信息对应表](https://www.yuque.com/simpfox/simpdoc/vhdndd5g0vmvswes)
>

（如mise use -g java@zulu-21，运行`java --version`）后，将显示

![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1744905557356-a42c167b-6fb5-4c23-a5ce-0765379297cc.png)

它将在全局（如 `/tmp``/home`及所有文件夹下都能够调用 java）

## 仅在当前文件夹及所有子文件夹调用一个版本的 Mise 包
mise use --env local {mise包名}

> Mise 包名详见 [调用信息对应表](https://www.yuque.com/simpfox/simpdoc/vhdndd5g0vmvswes)
>

（如mise use --env local java@zulu-21，运行`java --version`）后，将显示![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1744984167267-c601eeec-f65c-42c3-b6c6-13cdb3df6ace.png)

仅`/home/container`或例如`/home/container/test/1.jar`这类在`/home/container`目录下的文件或文件夹中，这个环境变量将生效。

#  环境变量调用（通用）
:::warning
请对应【调用信息对应表】的 `环境变量`

:::

以 `Java` 为例，一个 ${openjdk+版本号} （如 ${openjdk8} 表示 Java 8），可替换`java`使用  
如图所示：  
![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1744984306260-8984d323-ec33-4b07-a6c5-1a6f298b7496.png)

# 绝对路径调用（通用）
:::warning
请对应【调用信息对应表】的 `绝对路径`

:::

一个 `绝对路径`，（如 /mise/installs/java/zulu-8/bin/java 表示 Java 8），可替换`java`或其他（如 `node` `python`） 使用。

如图所示：  
![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1744984416675-1c181cfd-5e91-4dda-8717-d6e4361551cf.png)

