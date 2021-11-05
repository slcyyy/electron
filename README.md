<!--
 * @Date: 2021-11-04 21:51:04
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-11-05 18:16:17
 * @Description: 
-->
#  环境准备

nodejs > 12

nvm切换node版本

git

main.js入口文件

# 进程和线程

一个进程之中可以有多个线程

线程在同一个进程中，内存是共享的

electron:一个主进程和多个渲染进程

每一个渲染进程对应一个窗口

main.js主进程,renderer.js一个渲染进程