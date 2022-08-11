<template>
    <div class="home">
        <el-container style="height: 100vh; border: 1px solid #eee">
            <!-- 侧边栏 -->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246); text-align: left">
                <el-menu router :default-active="$route.path" :collapse="isCollapse">
                    <el-submenu v-for="subMenu in menuList" :key="subMenu.index" :index="subMenu.index">
                        <template slot="title">
                            <i :class="subMenu.icon"></i>
                            {{ subMenu.title }}
                        </template>
                        <el-menu-item v-for="menuItem in subMenu.children" :key="menuItem.index" :index="menuItem.index">
                          {{ menuItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <!-- 头部 -->
                <el-header
                    style="
                        text-align: right;
                        font-size: 12px;
                        background: rgb(238, 241, 246);
                        display: flex;
                        align-items: center;
                        justify-content: end;
                    "
                >
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>xxx</span>
                </el-header>
                <!-- 主要内容 -->
                <el-main>
                    <router-view :key="$route.path"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            isCollapse: false,
            menuList: [
                {
                    index: '1',
                    icon: '',
                    title: '监控',
                    children: [
                        {
                            index: '/muti-video',
                            title: '多屏监控',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
