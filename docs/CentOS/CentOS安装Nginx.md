---
# date是手动设置此篇文章编写的时间
date: "2022/01/09 23:00"

# 手动设置此篇文章封面
# coverUrl: "https://h2.ioliu.cn/bing/BrassBandTrumpet_ZH-CN8703910231_640x480.jpg?imageslim"

# 是否置顶
sticky: false

# 设置keyword 多个以,分开
keyword: CentOS,Nginx

# 设置description
description: Nginx安装、配置

# 手动设置标题，否则使用h1标签作为标题
title:  Centos 安装 Nginx

# 这是设置标签，数组形式
tag: [Nginx,Centos]

# 这里设置类别，数组形式
categories: [CentOS相关项目安装教程]


---

# CentOS安装Nginx

## 自动安装Nginx

```bash
sudo yum -y install nginx
```

### 设置开机启动

```bash
sudo systemctl enable nginx
```

### 默认安装位置

```
/etc/nginx/
```

### 常用命令

```bash
# 设置开机启动 
sudo systemctl enable nginx
# 启动 nginx 服务
sudo service nginx start
# 停止 nginx 服务
sudo service nginx stop 
# 重启 nginx 服务
sudo service nginx restart 
# 重新加载配置，一般是在修改过 nginx 配置文件时使用。
sudo service nginx reload 
# 安装 nginx
sudo yum -y install nginx   
# 卸载 nginx
sudo yum remove nginx  
```



