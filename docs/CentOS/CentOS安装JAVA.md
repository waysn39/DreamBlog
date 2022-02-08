---
# date是手动设置此篇文章编写的时间
date: "2022/01/07 23:00"

# 手动设置此篇文章封面
# coverUrl: "https://h2.ioliu.cn/bing/BrassBandTrumpet_ZH-CN8703910231_640x480.jpg?imageslim"

# 是否置顶
sticky: false

# 设置keyword 多个以,分开
keyword: CentOS,JAVA

# 设置description
description: JAVA安装、配置

# 手动设置标题，否则使用h1标签作为标题
title:  Centos 安装 JAVA

# 这是设置标签，数组形式
tag: [JAVA,Centos]

# 这里设置类别，数组形式
categories: [CentOS相关项目安装教程]



---

# CentOS安装JAVA

## 查询JDK信息

```bash
yum -y list java*
```

## 安装JDK8

```bash
yum install -y java-1.8.0-openjdk-devel.x86_64 --setopt=usr_w_check=false
```

> devel 是JDK，其他是jre

## 配置环境变量

```bash
vim /etc/profile
```

```tex
#set java environment
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.312.b07-1.el7_9.x86_64
JRE_HOME=$JAVA_HOME/jre
CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib 
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
export JAVA_HOME JRE_HOME CLASS_PATH PATH

```

## 生效配置文件

```bash
source /etc/profile
```

## 查看版本

```bash
java -version
```