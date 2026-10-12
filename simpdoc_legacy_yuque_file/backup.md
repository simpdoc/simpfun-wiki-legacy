:::warning
**镜像管理与回档管理的区别**

镜像管理：主动创建镜像将消耗一定积分，保留180天，实例被销毁时，将创建一个长达60天的镜像，适合长期冷备份存储数据。

回档管理：简幻欢将自动创建回档点，可选择一个回档点进行回档，适合误操作，遭到破坏时回档使用。

:::

## 镜像管理
### **<font style="color:rgb(0, 0, 0);">新建镜像备份</font>**
<font style="color:rgb(28, 30, 33);">使用备份首先要创建一个备份，这个备份包含你创建备份时所有的服务器数据。</font>

1. <font style="color:rgb(28, 30, 33);">进入实例</font>
2. <font style="color:rgb(28, 30, 33);">点击</font><font style="color:rgb(28, 30, 33);">备份</font>
3. <font style="color:rgb(28, 30, 33);">点击</font><font style="color:rgb(28, 30, 33);">镜像管理</font><font style="color:rgb(28, 30, 33);">右上角的新建按钮</font>

:::info
手动创建的镜像将保留180天，约半年左右，请务必记好到期时间！

:::

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717991018383-4d564dc5-05b7-4efe-97e9-9aa9d114bca3.png)

1. <font style="color:rgb(28, 30, 33);">输入一个</font>**<font style="color:rgb(28, 30, 33);">唯一</font>**<font style="color:rgb(28, 30, 33);">的标识，例如时间等，点击创建，支付 30 积分即可</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717991018356-9b75740c-4c88-4685-8099-70a40a8e4044.png)

### **<font style="color:rgb(0, 0, 0);">还原镜像</font>**
<font style="color:rgb(28, 30, 33);">当您需要将您的服务器还原至备份时的状态时，就需要进行还原。</font>

:::danger
还原镜像将会删除现在服务器的所有文件，并还原至备份时的状态，

且整个过程**不可逆**，**无法**为您进行**数据还原**,

**因此造成的任何损失不进行赔偿。**

:::

1. <font style="color:rgb(28, 30, 33);">进入实例</font>
2. <font style="color:rgb(28, 30, 33);">点击</font><font style="color:rgb(28, 30, 33);">备份</font>
3. <font style="color:rgb(28, 30, 33);">点击</font><font style="color:rgb(28, 30, 33);">镜像管理</font><font style="color:rgb(28, 30, 33);">中您想要还原到的备份</font>
4. <font style="color:rgb(28, 30, 33);">点击右下角的还原按钮</font>
5. <font style="color:rgb(28, 30, 33);">再次点击还原即可。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717991018480-90fc3a0c-51ca-4585-b104-2d00255c51e0.png)

### 下载备份
1. 选中需要下载的镜像
2. 点击下载按钮
3. 生成链接后，点击下载

![](https://cdn.nlark.com/yuque/0/2025/png/32774263/1764592369344-b9604347-df2a-4205-a392-a7f17be4e99a.png)

## 回档管理
### <font style="color:rgb(0, 0, 0);">回档能将服务器文件还原至历史某个时间点</font>  
<font style="color:rgb(0, 0, 0);">当出现操作错误或业务出现故障时，可以使用该功能。</font>  
<font style="color:rgb(0, 0, 0);">请注意使用该功能时将会</font>**<font style="color:rgb(0, 0, 0);">覆盖现有的所有文件</font>**<font style="color:rgb(0, 0, 0);">！</font>  
**<font style="color:rgb(0, 0, 0);">回档只能找回已写入磁盘的数据（如MCJE中未保存的存档不会被找回）</font>**  
<font style="color:rgb(0, 0, 0);">不消耗积分</font>
![](https://cdn.nlark.com/yuque/0/2025/png/32774263/1737177643103-3633d239-59ab-422c-b608-d52a3d080bc0.png)



