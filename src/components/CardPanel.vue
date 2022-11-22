<template>
    <!-- <p>hello</p> -->
    <el-row>
        <el-col
            v-for="(book, index) in $store.state.books"
            :key="book"
            :xs="12"
            :sm="12"
            :md="8"
            :span="12"
            :lg="6"
            :xl="4"
        >
            <el-card :body-style="{ padding: '0px'}">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
            <div style="padding: 5px; margin: 0px 5px;">
                <span>{{book.name}}</span>
                <div class="bottom">
                <time class="time">{{ book.author }} · {{ book.publish}}</time>
                <!-- <el-button text class="button">Operating</el-button> -->
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped>

.el-col {
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    /* border: 1px solid black; */
}
.bottom {
    margin: 0px;
    padding: 0px;
}
.image {
    width: 100%;
    height: cal(1.5 * 300px);
}
</style>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()

// mounted = {
//     store.dispatch()
// }

</script>