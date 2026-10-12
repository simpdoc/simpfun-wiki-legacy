<font style="color:rgb(28, 30, 33);">定位栏是JE1.21.6/BE1.21.90后加入的一种显示其他玩家大致方位的功能。此功能默认开启，但是在某些服务器中可能并不需要开启这个功能。</font>

## <font style="color:rgb(28, 30, 33);">方法A：使用命令关闭</font>
<font style="color:rgb(28, 30, 33);">打开服务器控制台>终端</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718170782648-7376423c-ade9-4f17-88b6-3cf5e2659c0b.png)

<font style="color:rgb(28, 30, 33);">输入以下命令(可直接复制，游戏内使用ctrl+v粘贴，控制台输入请去掉斜杠)：</font>

```plain
/gamerule locatorBar false
```

```plain
/gamerule playerWaypoints false
```

### 开启定位栏
```plain
/gamerule locatorBar true
```

```plain
/gamerule playerWaypoints true
```

## <font style="color:rgb(28, 30, 33);">方法B：修改配置文件</font>
:::info
ℹ **提示**

这段内容是隶属于[关于server.properties](https://www.yuque.com/simpfox/simpdoc/bds-server-properties)文档的。

看完这段内容后想了解更多信息，请阅读父文档。

:::

<font style="color:rgb(28, 30, 33);">在</font><font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">server.properties</font>**<font style="color:rgb(28, 30, 33);"> </font><font style="color:rgb(28, 30, 33);">中添加以下配置并重新启动服务器。</font>

```properties
op-permission-level=4
```

<font style="color:rgb(28, 30, 33);">如图所示</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718119751134-27cd7caa-db6e-4108-86dc-a3a164466ed9.png)

<font style="color:rgb(28, 30, 33);">然后在有OP权限的情况下游戏内的设置就可以更改了。</font>

