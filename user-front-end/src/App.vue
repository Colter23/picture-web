<template>
  <div id="app">
    <header id="header" ref="header">

      <div class="user" @click="detail">
        <img class="user-face" ref="userface" :src="$store.state.userInfo.userFace" alt="头像"/>
        <span class="user-name" ref="username">{{$store.state.userInfo.userName}}</span>
      </div>

      <div class="search">
        <div class="tag" v-for="(tag,index) in tags" :key="index">{{tag}}<div class="del-tag" @click="deleteTag(tag)">×</div></div>
        <label>
          <input class="search-input" v-model="inputTag" @keyup.enter="pushTag">
        </label>
      </div>

      <div v-if="!$store.state.userInfo.login&&headerUnfold">
        <form class="login">
          <input class="login-input" placeholder="账号" type="text">
          <input class="login-input" placeholder="密码" type="password">
        </form>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  data: ()=>({
    headerUnfold: false,
    tags: ['全部','qqqqqqqq'],
    inputTag: ''
  }),
  methods: {
    detail(){
      if (this.headerUnfold=!this.headerUnfold){
        this.$refs.header.style.animation = 'unfold-head 0.5s forwards';
        this.$refs.userface.style.animation = 'unfold-face 0.5s forwards';
        this.$refs.username.style.fontSize = '0';
      } else {
        this.$refs.header.style.animation = 'fold-head 0.5s forwards';
        this.$refs.userface.style.animation = 'fold-face 0.5s forwards';
        this.$refs.username.style.fontSize = '30px';
      }

    },
    deleteTag(tag){
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    pushTag(){
      if (''!==this.inputTag) {
        this.tags.push(this.inputTag);
        this.inputTag = '';
      }
    },

  }
}
</script>

<style>
  @import "assets/css/base.css";
  #header{
    position: relative;
    width: 100%;
    height: 70px;
    background: #64AFFB;
    border-radius: 0 0 20px 20px;
    box-shadow: rgba(0,0,0,0.5) 0 3px 5px;
  }

  @keyframes unfold-head
  {
    from {height: 70px;border-radius: 0 0 20px 20px;}
    to {height: 170px;border-radius: 0 0 40px 40px;}
  }
  @keyframes fold-head
  {
    from {height: 170px;border-radius: 0 0 40px 40px;}
    to {height: 70px;border-radius: 0 0 20px 20px;}
  }
  @keyframes unfold-face {
    from {
      width: 56px;
      height: 56px;
      margin: 7px 10px 7px 40px;
      border-radius: 50%;
    }
    to {
      width: 110px;
      height: 110px;
      margin: 30px 10px 30px 80px;
      border-radius: 10%;
    }
  }
  @keyframes fold-face {
    from {
      width: 110px;
      height: 110px;
      margin: 30px 10px 30px 80px;
      border-radius: 10%;
    }
    to {
      width: 56px;
      height: 56px;
      margin: 7px 10px 7px 40px;
      border-radius: 50%;
    }
  }


  .user{
    display: inline-block;
    /*margin: 7px 10px 7px 40px;*/
  }
  .user-face{
    width: 56px;
    height: 56px;
    margin: 7px 10px 7px 40px;
    border-radius: 50%;
  }
  .user-name{
    display: inline-block;
    font-size: 30px;
    color: #343434;
    line-height: 70px;
    vertical-align: top;
  }

  .search{
    position: absolute;
    top: 10px;
    left: calc(50% - 30%);
    /*display: inline-block;*/
    width: 60%;
    height: 50px;
    /*margin: 10px 0 10px calc(50% - 30% - 235px);*/
    padding-left: 10px;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.5) 0 2px 4px;
    vertical-align: top;
    white-space:nowrap;
    overflow: hidden;
  }
  .tag{
    display: inline-block;
    padding: 5px 5px 5px 5px;
    margin: 10px 0 10px 10px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    color: #343434;
    background: #90CAF9;
  }
  .del-tag{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  .search-input{
    width: 100%;
    height: 100%;
    border: none;
    font-size: 20px;
    margin-left: 10px;
    vertical-align: top;
  }
  .search-input:focus {
    outline:none;
  }
  .login{
    position: absolute;
    top: 80px;
    left: calc(50% - 30%);
    width: 60%;
    height: 50px;
    /*background: #000;*/
  }
  .login-input{
    width: 44%;
    height: 100%;
    border: none;
    border-bottom: #fff 3px solid;
    font-size: 25px;
    color: #fff;
    margin-left: calc(4%);
    padding-left: 10px;
    vertical-align: top;
    background: rgba(0,0,0,0);
  }
  .login-input:focus {
    outline:none;
  }
  .login-input::-webkit-input-placeholder{
    color: #fff;
  }
</style>
