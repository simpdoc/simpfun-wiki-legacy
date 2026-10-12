:::info
ℹ **信息**

本文档是隶属于[关于server.properties](https://www.yuque.com/simpfox/simpdoc/bds-server-properties)文档的子文档。

看完此文档后想了解更多信息，请阅读父文档。

:::

## <font style="color:rgb(28, 30, 33);">作弊未启用？</font>
<font style="color:rgb(28, 30, 33);">如果发现自己</font>**<font style="color:rgb(28, 30, 33);">拥有op权限</font>**<font style="color:rgb(28, 30, 33);">却不能执行</font>`<font style="color:rgb(28, 30, 33);">/give</font>`<font style="color:rgb(28, 30, 33);">、</font>`<font style="color:rgb(28, 30, 33);">/gamemode</font>`<font style="color:rgb(28, 30, 33);">、</font>`<font style="color:rgb(28, 30, 33);">/time</font>`<font style="color:rgb(28, 30, 33);">、</font>`<font style="color:rgb(28, 30, 33);">/tp</font>`<font style="color:rgb(28, 30, 33);">和/gamerule等命令的话，说明服务器</font>**<font style="color:rgb(28, 30, 33);">未启用作弊</font>**<font style="color:rgb(28, 30, 33);">。</font>

## <font style="color:rgb(28, 30, 33);">启用作弊</font>
:::warning
⚠ **提示**

`server.properties`不支持热重载，请在关闭服务器的情况下对其进行修改。

:::

<font style="color:rgb(28, 30, 33);">在服务器文件管理根目录找到</font>`<font style="color:rgb(28, 30, 33);">server.properties</font>`<font style="color:rgb(28, 30, 33);">文件并打开，在其中找到这一行：</font>

```properties
allow-cheat=false
# If true then cheats like commands can be used.
# Allowed values: "true" or "false"
```

<font style="color:rgb(28, 30, 33);">将</font>`<font style="color:rgb(28, 30, 33);">false</font>`<font style="color:rgb(28, 30, 33);">改为</font>`<font style="color:rgb(28, 30, 33);">true</font>`<font style="color:rgb(28, 30, 33);">并重启服务器即可启用作弊。</font>

## <font style="color:rgb(28, 30, 33);">启用作弊后游戏里的设置点不动？</font>
<font style="color:rgb(28, 30, 33);">在</font><font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">server.properties</font>**<font style="color:rgb(28, 30, 33);"> </font><font style="color:rgb(28, 30, 33);">中添加以下配置并重新启动服务器。</font>

```properties
op-permission-level=4
```

<font style="color:rgb(28, 30, 33);">如图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718119498820-b5f40cab-d258-4655-b1d5-ad9e82aa6aa9.png)

<font style="color:rgb(28, 30, 33);">然后在有OP权限的情况下服务器设置就可以更改了。</font>

---

~~<font style="color:rgb(28, 30, 33);">(群友的愤怒)</font>~~

<font style="color:rgb(28, 30, 33);"> </font>![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718119499482-033e4caa-bdff-4131-aa14-84eef50039bb.png)

