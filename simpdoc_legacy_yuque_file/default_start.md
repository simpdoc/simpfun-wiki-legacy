这里写的是Linux镜像下默认的`start.sh`，如果你“一不小心”把默认的删了就可以来这里恢复。

:::danger
ℹ **提示**

以 "#" 开头的一行为注释，**不会被终端执行**！

:::

## Java镜像
```shell
#!/bin/bash

#启动变量说明，修改前务必查看
#https://www.yuque.com/simpfun/sfe/startup

openjdk8="/usr/bin/jdk/jdk1.8.0_361/bin/java"
openjdk11="/usr/bin/jdk/jdk-11.0.18/bin/java"
openjdk17="/usr/bin/jdk/jdk-17.0.6/bin/java"
openjdk19="/usr/bin/jdk/jdk-19.0.2/bin/java"
openjdk21="/usr/bin/jdk/jdk-21.0.2/bin/java"
openjdk25="/usr/bin/jdk/jdk-25.0.2/bin/java"

maxmem=$((SERVER_MEMORY - 1000))

# 示例：使用JDK17 启动server-release.jar 
#${openjdk17} -Xms1024M -Xmx${maxmem}M -jar server-release.jar nogui
```

:::warning
⚠ **提示**

部分基础镜像内的`start.sh`没有完整的内容，如缺少相关路径或变量定义请来此处复制！

:::

:::success
ℹ **提示**

自2024.4.30起，所有Java镜像(包括所有MinecraftJE的预设镜像)均已**预装**Java 21，路径如上所示。[具体内容详见此文章](https://www.wuye2004.top/archives/4)。

自2026.3.24起，所有Java镜像(包括所有MinecraftJE的预设镜像)均已**预装**Java 25，路径如上所示。

:::

### 部分MCJE服务端启动命令示例
Forge：1.17.1+ → [【MCJE】安装/升级Forge服务端](https://www.yuque.com/simpfox/simpdoc/customer-mcje-forge-server#a62a0849)

1.16.5- → [【MCJE】安装/升级Forge服务端](https://www.yuque.com/simpfox/simpdoc/customer-mcje-forge-server#a62a0849-1)

Fabric：[【MCJE】安装/升级Fabric服务端](https://www.yuque.com/simpfox/simpdoc/customer-mcje-fabric-server#a62a0849)

NeoForge：[【MCJE】安装/升级NeoForge服务端](https://www.yuque.com/simpfox/simpdoc/customer-mcje-neoforge-server#a62a0849)

## Python镜像
```shell
#!/bin/bash

#启动变量说明，修改前务必查看
#https://www.yuque.com/simpfun/sfe/startup


python3 -V
echo "您需要修改启动参数来配置您的服务端"
```

:::warning
⚠ **提示**

Python镜像不含Java运行环境。

:::



**<font style="color:#DF2A3F;"></font>**



